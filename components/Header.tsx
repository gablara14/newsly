import React from "react";
import Logo from "./Logo";
import styles from "../styles/Components.module.css";
import Button from "./Button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Logo />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.headerCreateAccountButton}>
            <Button text="Criar conta" to="/signup" />
          </div>
          <Link href="/signin">
            <span
              style={{
                color: "#6C63FF",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 20,
                cursor: "pointer",
              }}
            >
              Entrar
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
