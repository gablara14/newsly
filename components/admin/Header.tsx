import React, { useState } from "react";
import Logo from "../Logo";
import styles from "../../styles/Admin.module.css";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={styles.adminHeader}>
      <div className={styles.adminHeaderContainer}>
        <Logo text="Admin" />
        <div className={styles.adminHeaderMenu}>
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
            <li>
              <Link href="/">
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className={styles.menuIcon}
      >
        {showMobileMenu ? (
          <CloseIcon style={{ fontSize: 40, margin: 9.5, cursor: "pointer" }} />
        ) : (
          <MenuIcon style={{ fontSize: 40, margin: 9.5, cursor: "pointer" }} />
        )}
      </div>
      {showMobileMenu && <MobileMenu />}
    </header>
  );
};
export default Header;
