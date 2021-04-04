import React from "react";
import Link from "next/link";
import styles from "../../styles/Admin.module.css";

const MobileMenu: React.FC = () => {
  return (
    <div className={styles.mobileMenu}>
      <ul>
        <li>
          <Link href="/admin">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/leads">
            <a>Leads</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/posts">
            <a>Publicações</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings">
            <a>Configurações</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/create">
            <a>Criar</a>
          </Link>
          <Link href="/admin">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
