import icon from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={icon} alt="the logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
