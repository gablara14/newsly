import React from "react";
import Logo from "../Logo";
import styles from "../../styles/Admin.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.adminHeader}>
      <div className={styles.adminHeaderContainer}>
        <Logo />
        <div>
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
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
