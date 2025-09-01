import React from "react";
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  setCount: (num) => set({ count: num }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Demo() {
  const { count, setCount, increment, decrement } = useStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Demo;
