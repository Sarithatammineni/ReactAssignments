import { useState } from "react";

function ComponentA() {
  return <h3>Status is TRUE</h3>;
}

function ComponentB() {
  return <h3>Status is FALSE</h3>;
}

export default function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div className="p-4 rounded-2xl shadow-md max-w-xs">
      <button
        onClick={() => setStatus(!status)}
        className="px-4 py-2 mb-3 rounded-xl shadow"
      >
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}
