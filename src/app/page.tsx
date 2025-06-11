'use client'; // 👈 VERY IMPORTANT!

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>👋 Welcome to Next.js!</h1>
      <h2>🧮 Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
