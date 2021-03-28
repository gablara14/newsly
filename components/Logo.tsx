import React from "react";
import styles from "../styles/Components.module.css";
import Link from "next/link";

interface LogoProps {
  text?: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
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
        <span className={styles.logoText}>{text ? text : "Newsly"}</span>
      </Link>
    </div>
  );
};
export default Logo;
