import React, { useState, useEffect, useRef } from 'react';
import lunr from 'lunr';
import styles from './HomepageSearch.module.css';

export default function HomepageSearch() {
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  const suggestions = [
    'How to setup a project?',
    'Workspace Details',
  ];

  useEffect(() => {
    async function loadIndex() {
      try {
        const [indexRes, docsRes] = await Promise.all([
          fetch('/lunr/lunr-index.json'),
          fetch('/lunr/search-doc.json'),
        ]);

        const indexJson = await indexRes.json();
        const docsJson = await docsRes.json();

        const lunrIndex = lunr.Index.load(indexJson);

        // Extract real docs array
        const docList = docsJson.searchDocs;

        // Map: lunr ref → actual document
        const docsById = {};
        docList.forEach((doc, idx) => {
          docsById[idx] = doc;
        });

        setIndex(lunrIndex);
        setDocs(docsById);

      } catch (err) {
        console.error('Failed to load Lunr index:', err);
      }
    }
    loadIndex();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const performSearch = (value) => {
    if (!index || value.trim().length < 2) {
      setResults([]);
      return;
    }

    const found = index.search(value).map((r) => {
      const doc = docs[r.ref]; // docs is now docsById
      return doc ? { ...doc, score: r.score } : null;
    }).filter(Boolean);

    setResults(found.slice(0, 8));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    performSearch(suggestion);
  };

  return (
    <div className={styles.searchWrapper} ref={containerRef}>
      <div className={styles.searchBox}>
        <input
          type="search"
          placeholder=" "
          className={styles.searchInput}
          value={query}
          onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          onClick={() => performSearch(query)}
        >
          Search
        </button>
      </div>

      <div className={styles.suggestions}>
        {suggestions.map((text, idx) => (
          <button
            key={idx}
            className={styles.suggestionChip}
            onClick={() => handleSuggestionClick(text)}
          >
            {text}
          </button>
        ))}
      </div>

      {results.length > 0 && (
        <div className={styles.dropdown}>
          {results.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className={styles.dropdownItem}
              onClick={() => setResults([])}
            >
              <h4>{item.title}</h4>
              <p>{item.content.slice(0, 100)}...</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
