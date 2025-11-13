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
    'Make custom status',
    'Create custom fields',
    'Invite teammates',
    'Track progress',
  ];

  useEffect(() => {
    async function loadIndex() {
      try {
        const [indexRes, docsRes] = await Promise.all([
          fetch('/lunr/lunr-index.json'),
          fetch('/lunr/search-doc.json'),
        ]);
        const indexJson = await indexRes.json();
        const docJson = await docsRes.json();
        const idx = lunr.Index.load(indexJson);
        setIndex(idx);
        setDocs(docJson);
      } catch (err) {
        console.error('Failed to load Lunr index:', err);
      }
    }
    loadIndex();

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const performSearch = (value) => {
    if (!index || value.trim().length < 2) {
      setResults([]);
      return;
    }
    const found = index.search(value).map((r) => ({
      ...docs.find((d) => d.id === r.ref),
      score: r.score,
    }));
    setResults(found.slice(0, 6));
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
