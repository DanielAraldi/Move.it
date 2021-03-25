import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export function Button({ color, children }: ButtonProps) {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter(counter + 1);

  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      onClick={increment}
    >
      {children} - <strong>{counter}</strong>
    </button>
  );
}
