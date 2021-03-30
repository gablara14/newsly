import React, { useState } from "react";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import styles from "../styles/SignIn.module.css";

const signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log({ ...data });
  };

  return (
    <div className="view">
      <SignCard
        title="Fazer Login"
        buttonText="Entrar"
        smallText="Não possui uma conta? Fazer cadastro"
        smallTextLink="/signup"
        onSubmit={handleSubmit}
      >
        <div>
          <SignField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeHolder="Digite o seu email..."
          />
          <SignField
            label="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeHolder="Digite a sua senha..."
            type="password"
          />
        </div>
      </SignCard>
    </div>
  );
};

export default signin;
