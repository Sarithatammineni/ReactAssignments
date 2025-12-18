import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); 
  return (
    <div className="p-4 rounded-2xl shadow-md max-w-xs">
      <h2 className="text-xl font-semibold mb-2">Counter</h2>
      <p className="mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 rounded-xl shadow"
      >
        Increase
      </button>
    </div>
  );
}
