import React from "react";

const PasswordStrength = ({ validity: { minChar, number, speialChar } }) => {
  return (
    <div>
      <p className="text-dark">Password must contain:</p>
      <ul className="text-muted">
        <PasswordStrengthItem isValid={minChar} text="at least 8 characters" />
        <PasswordStrengthItem isValid={number} text="at least 1 number" />
        <PasswordStrengthItem isValid={speialChar} text="at least 1 special character"/>
      </ul>
    </div>
  );
};

const PasswordStrengthItem = ({ isValid, text }) => {
  const highlightClass = isValid
    ? "text-success"
    : isValid !== null
    ? "text-danger"
    : "";
  return <li className={highlightClass}>{text}</li>;
};
export default PasswordStrength;
