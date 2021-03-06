import Link from "next/link";
import React from "react";
import styles from "../../styles/SignIn.module.css";
import SignButton from "./SignButton";
interface SignCardProps {
  title: "Fazer Login" | "Criar conta" | "Esqueci minha senha";
  buttonText: "Entrar" | "Continuar" | "Recuperar senha";
  smallText: string;
  smallTextLink: string;
  onSubmit?: any;
  loading?: boolean;
}

const SignCard: React.FC<SignCardProps> = ({
  children,
  title,
  buttonText,
  smallText,
  smallTextLink,
  onSubmit,
  loading,
}) => {
  return (
    <div className={styles.signCardWrap}>
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.signTitle}>{title}</h1>
      </div>

      <form className={styles.signCard}>
        <div className={styles.signCardBody}>
          {children}
          {title === "Fazer Login" ? (
            <div className={styles.forgotPassMessageContainer}>
              <Link href="/forgotpass">
                <p className={styles.forgotPassMessage}>
                  <span className="pointer"> Esqueci minha senha</span>
                </p>
              </Link>
            </div>
          ) : null}
        </div>
        <div className={styles.signCardFooter}>
          <SignButton loading={loading} onClick={onSubmit} text={buttonText} />
          <p className={styles.smallText}>
            {smallText.split("?")[0]}?
            <Link href={smallTextLink}>
              <span className="pointer button">{smallText.split("?")[1]}</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignCard;
