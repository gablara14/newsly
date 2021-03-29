import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import { signUpUser } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import styles from "../styles/SignIn.module.css";

type Event = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLInputElement>;

const signup: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading }: any = useSelector<StoreState>((state) => state.auth);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      email,
      username,
      password,
    };
    dispatch(signUpUser(data));
  };

  return (
    <div className="view">
      <SignCard
        title="Criar conta"
        buttonText="Continuar"
        smallText="Ja possui uma conta? Fazer Login"
        smallTextLink="/signin"
        onSubmit={handleSubmit}
        loading={loading}
      >
        <div>
          <SignField
            label="Nome"
            placeHolder="Digite o seu nome..."
            value={name}
            required
            onChange={(e: Event) => setName(e.target.value)}
          />
          <SignField
            type="email"
            label="Email"
            required
            placeHolder="Digite o seu email..."
            value={email}
            onChange={(e: Event) => setEmail(e.target.value)}
          />
          <SignField
            label="Username"
            required
            placeHolder="Digite a seu username..."
            value={username}
            onChange={(e: Event) => setUsername(e.target.value)}
          />
          <SignField
            label="Senha"
            required
            placeHolder="Digite a sua senha..."
            type="password"
            value={password}
            onChange={(e: Event) => setPassword(e.target.value)}
          />
          <SignField
            label="Confirme a sua senha"
            required
            placeHolder="Digite novamente a sua senha..."
            type="password"
            value={confirmPassword}
            onChange={(e: Event) => setConfirmPassword(e.target.value)}
          />
        </div>
      </SignCard>
    </div>
  );
};

export default signup;
