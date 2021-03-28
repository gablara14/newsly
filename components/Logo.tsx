import React from "react";
import styles from "../styles/Components.module.css";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Link href="/">
        <span className={styles.logoText}>Newsly</span>
      </Link>
    </div>
  );
};
export default Logo;
