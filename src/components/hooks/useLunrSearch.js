import { useEffect, useState } from 'react';
import lunr from 'lunr';

export default function useLunrSearch() {
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState({});

  useEffect(() => {
    async function loadIndex() {
      try {
        const res = await fetch('/search-index.json');
        if (!res.ok) throw new Error(`HTTP ${res.status} while fetching /search-index.json`);
        const raw = await res.json();

        // Debug: always log raw structure so you can inspect in browser console
        // Remove or comment out in production if you want.
        // eslint-disable-next-line no-console
        console.debug('[search-index.json] raw:', raw);

        // Determine where the serialized Lunr index lives
        // Common shapes:
        // 1) { index: {...}, docs: [...] }        <-- most common from plugin
        // 2) { index: { index: {...}, ... }, docs: [...] }  <-- nested
        // 3) the file itself is the serialized index object (rare)
        let serializedIndex = null;
        let docsArray = null;

        if (raw && raw.index && raw.docs) {
          // typical plugin output
          serializedIndex = raw.index;
          docsArray = raw.docs;
        } else if (raw && raw.index && raw.index.index && raw.docs) {
          // nested: raw.index.index is the serialized object
          serializedIndex = raw.index.index;
          docsArray = raw.docs;
        } else if (raw && raw.index && raw.index.fieldVectors) {
          // raw.index already looks like a serialized index (has fieldVectors)
          serializedIndex = raw.index;
          docsArray = raw.docs || raw.documents || [];
        } else if (raw && raw.fieldVectors) {
          // the JSON itself is a serialized index
          serializedIndex = raw;
          docsArray = raw.docs || raw.documents || [];
        } else if (raw && raw.index && raw.index._serialized) {
          // some other wrapping - attempt to find nested
          serializedIndex = raw.index._serialized || raw.index;
          docsArray = raw.docs || [];
        } else {
          // fallback attempts
          if (raw && Array.isArray(raw.docs)) {
            docsArray = raw.docs;
          } else if (Array.isArray(raw)) {
            // maybe raw itself is docs array (unlikely if index needed)
            docsArray = raw;
          }
          // try to find any object that looks like serialized index
          if (raw && typeof raw === 'object') {
            // common property name checks
            if (raw.index) serializedIndex = raw.index;
            else if (raw.serialized) serializedIndex = raw.serialized;
          }
        }

        if (!serializedIndex) {
          throw new Error(
            'Could not find a serialized Lunr index object inside /search-index.json. ' +
            'Open browser console to inspect the logged raw JSON.'
          );
        }

        // Try to load the lunr index. If it fails, show helpful debugging info.
        let lunrIndex;
        try {
          lunrIndex = lunr.Index.load(serializedIndex);
        } catch (errLoad) {
          // Provide additional hints in error
          console.error('Lunr Index.load failed. Serialized index sample keys:', Object.keys(serializedIndex || {}));
          throw errLoad;
        }

        // Normalize docs array -> docsById mapping
        const docsById = {};
        if (Array.isArray(docsArray)) {
          docsArray.forEach((doc) => {
            // plugin typically uses `id`, but some shapes use `i` or `ref`
            const id = doc.id ?? doc.i ?? doc.ref ?? doc._id ?? doc.slug ?? null;
            if (id !== null) docsById[id] = doc;
            else {
              // if no id field, try to index by array index
              // create fallback id as the array index if necessary
              // (lunr refs are numeric indices in some builds)
              // This fallback is defensive and may not match the lunr ref
            }
          });
        }

        setIndex(lunrIndex);
        setDocs(docsById);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to load Lunr index:', err);
      }
    }

    loadIndex();
  }, []);

  const search = (query) => {
    if (!index || !query || query.trim().length < 2) return [];

    try {
      const matches = index.search(query);
      return matches
        .map((m) => {
          const doc = docs[m.ref];
          if (!doc) return null;
          return {
            title: doc.t ?? doc.title ?? doc.name ?? '',
            url: doc.u ?? doc.url ?? doc.path ?? '',
            breadcrumbs: doc.b ?? doc.breadcrumbs ?? [],
            score: m.score,
          };
        })
        .filter(Boolean)
        .slice(0, 8);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Lunr search failed:', e);
      return [];
    }
  };

  return { search };
}
