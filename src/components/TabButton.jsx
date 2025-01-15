export default function TabButton({ children, ...props }) {
  console.log("TabButton component");

  return (
    <li>
      <button {...props}> {children} </button>
    </li>
  );
}
