import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "../../styles/Admin.module.css";
import Link from "next/link";

interface AdminContainerProps {
  title: string;
  backLink?: string;
}

const AdminContainer: React.FC<AdminContainerProps> = ({
  children,
  title,
  backLink,
}) => {
  const [splittedPath, setSplittedPath] = useState([]);
  const [backPath, setBackPath] = useState("");

  useEffect(() => {
    setSplittedPath(window.location.pathname.split("/"));
    setBackPath(splittedPath.slice(0, splittedPath.length - 1).join("/"));
  });

  return (
    <div className={styles.adminContainer}>
      <Header />
      <div className={styles.adminBody}>
        {splittedPath.length >= 4 ? (
          <Link href={backLink ? backLink : backPath}>
            <a>
              <img src="/back.png" alt="back" />
            </a>
          </Link>
        ) : null}

        <h1 className={styles.adminTitle}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AdminContainer;
