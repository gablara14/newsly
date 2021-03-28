import React from "react";
import styles from "../../styles/Admin.module.css";

interface AdminFieldProps {
  label: string;
  placeHolder?: string;
  type?: string;
}

const AdminField: React.FC<AdminFieldProps> = ({
  label,
  placeHolder,
  type,
}) => {
  return (
    <div className={styles.fieldContainer}>
      <label>{label}:</label>
      <input type={type ? type : "text"} placeholder={placeHolder} />
    </div>
  );
};

export default AdminField;
