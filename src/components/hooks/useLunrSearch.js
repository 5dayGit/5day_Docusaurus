import { useEffect } from 'react';
import { useState } from 'react';
import lunr from 'lunr';

export default function useLunrSearch() {
  const [index, setIndex] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function loadIndex() {
      try {
        const [indexRes, docsRes] = await Promise.all([
          fetch('/assets/search-index.json'),
          fetch('/assets/search-index-docs.json'),
        ]);

        const indexJson = await indexRes.json();
        const docsJson = await docsRes.json();

        const lunrIndex = lunr.Index.load(indexJson);

        // docsJson is an array already
        const docsById = {};
        docsJson.forEach(doc => {
          docsById[doc.i] = doc;   // map by numeric ID
        });

        setIndex(lunrIndex);
        setDocs(docsById);
      } catch (err) {
        console.error('Failed to load Lunr index:', err);
      }
    }
    loadIndex();
  }, []);

   const found = index.search(value).map((r) => {
      const doc = docs[r.ref];
      if (!doc) return null;

      return {
        title: doc.t,
        url: doc.u,
        breadcrumbs: doc.b,
        score: r.score,
      };
    }).filter(Boolean);

    setResults(found.slice(0, 8));
  

  return { found };
}
