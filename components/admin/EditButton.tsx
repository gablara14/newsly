import React from "react";
import styles from "../../styles/Admin.module.css";
import Loader from "../loader/circle";
interface EditButtonProps {
  text: string;
  color?: "red" | "purple";
  loading?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({ text, color, loading }) => {
  return (
    <button
      className={
        color === "red" ? styles.removeLeadButton : styles.addLeadButton
      }
    >
      {loading ? <Loader /> : text}
    </button>
  );
};

export default EditButton;
