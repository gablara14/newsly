import React from "react";
import styles from "../styles/Components.module.css";

interface AuthorCardProps {
  authorName: string;
  authorTheme: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ authorName, authorTheme }) => {
  return (
    <div className={styles.authorCard}>
      <div className={styles.authorImage}></div>
      <div className="center-col" style={{ padding: 5 }}>
        <h3 style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
          {" "}
          {authorName}
        </h3>
        <p style={{ color: "rgba(0,0,0,0.50)", fontSize: 16, marginTop: 10 }}>
          {authorTheme}
        </p>
      </div>
    </div>
  );
};
export default AuthorCard;
