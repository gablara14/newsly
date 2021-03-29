import React from "react";
import styles from "../../styles/SignIn.module.css";

interface SignFieldProps {
  label: string;
  placeHolder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  required?: boolean;
}

const SignField: React.FC<SignFieldProps> = ({
  label,
  placeHolder,
  type,
  value,
  onChange,
  required,
}) => {
  return (
    <div className={styles.fieldContainer}>
      <label>{label}:</label>
      <input
        required={required}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeHolder}
      />
    </div>
  );
};

// const DefaultProps = {
//   value: '',
// }

export default SignField;
