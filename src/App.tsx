import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col gap-y-4">
      <h1 className="font-bold text-3xl">Vite + React</h1>
      <div className="flex flex-col gap-x-2">
        <button className="w-24" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </main>
  );
}

export default App;
