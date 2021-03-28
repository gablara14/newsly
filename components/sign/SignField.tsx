import React from "react";
import styles from "../../styles/SignIn.module.css";

interface SignFieldProps {
  label: string;
  placeHolder?: string;
  type?: string;
}

const SignField: React.FC<SignFieldProps> = ({ label, placeHolder, type }) => {
  return (
    <div className={styles.fieldContainer}>
      <label>{label}:</label>
      <input type={type ? type : "text"} placeholder={placeHolder} />
    </div>
  );
};

export default SignField;
