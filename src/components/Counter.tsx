import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-8 rounded-lg bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">React Counter</h2>
      <p className="text-4xl font-mono text-blue-600">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          type="button"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          type="button"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}
