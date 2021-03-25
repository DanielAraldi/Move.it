interface ButtonProps {
  color: string;
}

export function Button({ color }: ButtonProps) {
  return (
    <button type="button" style={{ backgroundColor: color }}>
      {color}
    </button>
  );
}
