import { useEffect, useState } from "react";
import lunr from "lunr";

export default function useLunrSearch() {
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState({});

  useEffect(() => {
    async function loadIndex() {
      try {
        const res = await fetch("/lunr/search-index.json");
        if (!res.ok) throw new Error("Failed to fetch lunr index.");

        const raw = await res.json();

        const lunrIndex = lunr.Index.load(raw.index);

        // Map docs by string ID (critical)
        const docsById = {};
        raw.docs.forEach((doc) => {
          docsById[String(doc.id)] = doc;
        });

        setIndex(lunrIndex);
        setDocs(docsById);
      } catch (err) {
        console.error("Failed to load Lunr index:", err);
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
          const doc = docs[String(m.ref)];
          if (!doc) return null;

          return {
            title: doc.title,
            url: doc.url,
            breadcrumbs: doc.breadcrumbs,
            score: m.score,
          };
        })
        .filter(Boolean)
        .slice(0, 8);
    } catch (e) {
      console.error("Lunr search failed:", e);
      return [];
    }
  };

  return { search };
}
