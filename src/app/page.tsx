'use client';

import { useState, useEffect } from 'react';

const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "Life is what happens when you’re busy making other plans. – John Lennon",
  "The only limit to our realization of tomorrow is our doubts of today. – FDR",
  "Stay hungry, stay foolish. – Steve Jobs"
];

export default function Home() {
  const [quote, setQuote] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote(); // load a quote on first render
  }, []);

  const addFavorite = () => {
    if (!favorites.includes(quote)) {
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📚 Quote Generator</h1>
      <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>{quote}</p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={getRandomQuote} style={{ marginRight: '1rem' }}>
          🎲 New Quote
        </button>
        <button onClick={addFavorite}>💖 Save to Favorites</button>
      </div>

      {favorites.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>🌟 Favorites</h2>
          <ul>
            {favorites.map((fav, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {fav}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
