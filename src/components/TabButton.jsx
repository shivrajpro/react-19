export default function TabButton({ children, onSelect }) {
  console.log("TabButton component");

  return (
    <li>
      <button onClick={onSelect}> {children} </button>
    </li>
  );
}
