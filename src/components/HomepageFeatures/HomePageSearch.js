import React, { useState, useEffect, useRef } from 'react';
import lunr from 'lunr';
import styles from './HomePageSearch.module.css';
import useLunrSearch from '../hooks/useLunrSearch';

export default function HomepageSearch() {
  const { search } = useLunrSearch();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  const suggestions = [
    { text: "Create automation workflow", url: "/docs/user-guide/5day.io%20Features/Automation/Add%20Workflow" },
    { text: "What is Task type", url: "/docs/user-guide/5day.io%20Features/Task%20Types/Intro%20to%20Task%20Types" },
    { text: "Manage Status Workflow", url: "/docs/user-guide/5day.io%20Features/Status%20Workflows/Intro%20to%20Status%20Workflows/" },
    { text: "Manage Widget in Dashboard", url: "/docs/user-guide/Analytics/Overview%20of%20Widgets" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setResults(search(value));
  };

  const handleSuggestionClick = (value) => {
    setQuery(value);
    setResults(search(value));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function close(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    }

    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);

    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, []);

  return (
    <div className={styles.searchWrapper} ref={containerRef}>
      {/* <div className={styles.searchBox}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder=" "
          value={query}
          onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          onClick={() => setResults(search(query))}
        >
          Search
        </button>
      </div> */}

      <div className={styles.suggestions}>
        {suggestions.map((item, idx) => (
          <button
            key={idx}
            className={styles.suggestionChip}
            onClick={() => {
              setQuery(item.text);
              setResults(search(item.text));
              window.location.href = item.url;  // navigate to the doc
            }}
          >
            {item.text}
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
