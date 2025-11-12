import { useEffect } from 'react';
import { useState } from 'react';
import lunr from 'lunr';

export default function useLunrSearch() {
  const [index, setIndex] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function loadIndex() {
      try {
        const [indexRes, docRes] = await Promise.all([
          fetch('/lunr-index.json'),
          fetch('/search-doc.json')
        ]);

        if (!indexRes.ok || !docRes.ok) {
          throw new Error('Failed to load Lunr index or search docs');
        }

        const indexData = await indexRes.json();
        const docData = await docRes.json();

        const idx = lunr.Index.load(indexData);
        setIndex(idx);
        setDocuments(docData);
      } catch (err) {
        console.error('Failed to load Lunr index:', err);
      }
    }
    loadIndex();
  }, []);

  const search = (query) => {
    if (!index || !query) return [];
    const results = index.search(query);
    return results.map(r => ({
      ...documents.find(d => d.id === r.ref),
      score: r.score,
    }));
  };

  return { search };
}
