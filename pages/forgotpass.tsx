import React from "react";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import styles from "../styles/SignIn.module.css";

const forgotpass: React.FC = () => {
  return (
    <div className="view">
      <SignCard
        title="Esqueci minha senha"
        buttonText="Recuperar senha"
        smallText="Lembrou da senha? Fazer login"
        smallTextLink="/signin"
      >
        <div style={{ width: 273, marginBottom: 40 }}>
          <h2 style={{ fontSize: 16 }}>
            Digite o seu email e iremos te enviar um link de recuperação
          </h2>
        </div>
        <div>
          <SignField
            type="email"
            label="Email"
            placeHolder="Digite o seu email..."
          />
        </div>
      </SignCard>
    </div>
  );
};

export default forgotpass;
