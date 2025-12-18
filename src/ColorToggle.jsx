import { useState } from "react";

export default function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div className="p-4">
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "18px",
          marginBottom: "12px",
        }}
      >
        This text changes color
      </div>

      <button
        onClick={() => setIsRed(!isRed)}
        className="px-4 py-2 rounded-xl shadow"
      >
        Toggle Color
      </button>
    </div>
  );
}
