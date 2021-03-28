import React from "react";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import styles from "../styles/SignIn.module.css";

const signin: React.FC = () => {
  return (
    <div className="view">
      <SignCard
        title="Fazer Login"
        buttonText="Entrar"
        smallText="Não possui uma conta? Fazer cadastro"
        smallTextLink="/signup"
      >
        <div>
          <SignField
            type="email"
            label="Email"
            placeHolder="Digite o seu email..."
          />
          <SignField
            label="Senha"
            placeHolder="Digite a sua senha..."
            type="password"
          />
        </div>
      </SignCard>
    </div>
  );
};

export default signin;
