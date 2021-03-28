import React from "react";
import styles from "../styles/Components.module.css";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />
          <div>
            <h3>Dúvidas? Nos mande uma mensagem</h3>
            <p>info@newsly.com.br</p>
          </div>
        </div>
        <div>
          <p>
            News Me 2021 -{" "}
            <span style={{ color: "rgba(0,0,0,0.70)" }}>
              Todos os direitos reservados
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
