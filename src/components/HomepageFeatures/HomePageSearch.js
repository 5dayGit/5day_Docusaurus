import React, { useState, useEffect, useRef } from 'react';
import lunr from 'lunr';
import styles from './HomepageSearch.module.css';

export default function HomepageSearch() {
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  // Load Lunr index and docs
  useEffect(() => {
    async function loadIndex() {
      try {
        const [indexRes, docsRes] = await Promise.all([
          fetch('/lunr-index.json'),
          fetch('/search-doc.json')
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

    // Close dropdown on outside click
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!index || value.trim().length < 2) {
      setResults([]);
      return;
    }

    const found = index.search(value).map((r) => ({
      ...docs.find((d) => d.id === r.ref),
      score: r.score,
    }));

    setResults(found.slice(0, 6)); // top 6 results
  };

  // Handle result click
  const handleResultClick = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className={styles.searchWrapper} ref={containerRef}>
      <div className={styles.searchBox}>
        <input
          type="search"
          placeholder="Search documentation..."
          className={styles.searchInput}
          value={query}
          onChange={handleChange}
        />
        <button className={styles.searchButton}>Search</button>
      </div>

      {results.length > 0 && (
        <div className={styles.dropdown}>
          {results.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className={styles.dropdownItem}
              onClick={handleResultClick}
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
