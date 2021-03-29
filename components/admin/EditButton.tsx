import Link from "next/link";
import React from "react";
import styles from "../../styles/Admin.module.css";
import Loader from "../loader/circle";
interface EditButtonProps {
  text: string;
  color?: "red" | "purple";
  to?: string;
  onClick?: (param?: any) => any;
  loading?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({
  text,
  color,
  loading,
  to,
  onClick,
}) => {
  if (to) {
    return (
      <Link href={to}>
        <a>
          <button
            className={
              color === "red" ? styles.removeLeadButton : styles.addLeadButton
            }
          >
            {loading ? <Loader /> : text}
          </button>
        </a>
      </Link>
    );
  }

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
