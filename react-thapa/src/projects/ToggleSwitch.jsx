import { useState } from "react";
import "./ToggleSwitch.css";
import { FaUsers } from "react-icons/fa";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  function handleToggleSwitch() {
    setIsOn(!isOn);
  }

  const checkIsOn = isOn ? "on" : "off";
  const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  return (
    <>
      <h1>
        Toggle Switch <FaUsers />
      </h1>
      <div
        className="toggle-switch"
        style={toggleBgColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
