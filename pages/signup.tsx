import React from "react";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import styles from "../styles/SignIn.module.css";

const signup: React.FC = () => {
  return (
    <div className="view">
      <SignCard
        title="Criar conta"
        buttonText="Continuar"
        smallText="Ja possui uma conta? Fazer Login"
        smallTextLink="/signin"
      >
        <div>
          <SignField label="Nome" placeHolder="Digite o seu nome..." />
          <SignField
            type="email"
            label="Email"
            placeHolder="Digite o seu email..."
          />
          <SignField label="Username" placeHolder="Digite a seu username..." />
          <SignField
            label="Senha"
            placeHolder="Digite a sua senha..."
            type="password"
          />
          <SignField
            label="Confirme a sua senha"
            placeHolder="Digite novamente a sua senha..."
            type="password"
          />
        </div>
      </SignCard>
    </div>
  );
};

export default signup;
