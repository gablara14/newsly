import React from "react";
import Header from "./Header";
import styles from "../../styles/Admin.module.css";

interface AdminContainerProps {
  title: string;
}

const AdminContainer: React.FC<AdminContainerProps> = ({ children, title }) => {
  return (
    <div className={styles.adminContainer}>
      <Header />
      <div className={styles.adminBody}>
        <h1 className={styles.adminTitle}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AdminContainer;
