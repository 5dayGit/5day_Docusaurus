import React, { useState, useEffect, useRef } from 'react';
import lunr from 'lunr';
import styles from './HomePageSearch.module.css';

export default function HomepageSearch() {
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState({});
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
          fetch('/search-index.json'),
        ]);

        const indexJson = await indexRes.json();
        const docsJson = await docsRes.json();

        const lunrIndex = lunr.Index.load(indexJson);

        const docsById = {};
        docsJson.forEach(doc => {
          docsById[doc.i] = doc;
        });

        setIndex(lunrIndex);
        setDocs(docsById);
      } catch (err) {
        console.error('Failed to load Lunr index:', err);
      }
    }

    loadIndex();
  }, []);

  // Close dropdown on outside click
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

              {item.breadcrumbs?.length > 0 && (
                <p className={styles.breadcrumbs}>
                  {item.breadcrumbs.join(" › ")}
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
