import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignCard from "../components/sign/SignCard";
import SignField from "../components/sign/SignField";
import { signUpUser } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import styles from "../styles/SignIn.module.css";
import { useRouter } from "next/router";

type Event = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLInputElement>;

const signup: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [someFormError, setSomeFormError] = useState("");
  const { loading }: any = useSelector<StoreState>((state) => state.auth);
  const { errors }: any = useSelector<StoreState>((state) => state.static);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (errors && Object.values(errors) && Object.values(errors).length > 0) {
      setSomeFormError("Por favor, preencha todos os campos.");
      return;
    }
    const data = {
      name,
      email,
      username,
      password,
    };
    dispatch(signUpUser(data, router));
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
            minLength={6}
            maxLength={20}
            placeHolder="Digite a sua senha..."
            type="password"
            value={password}
            onChange={(e: Event) => setPassword(e.target.value)}
          />
          <SignField
            label="Confirme a sua senha"
            placeHolder="Digite novamente a sua senha..."
            type="password"
            value={confirmPassword}
            mustBeEqual={password}
            onChange={(e: Event) => setConfirmPassword(e.target.value)}
          />
        </div>
      </SignCard>
    </div>
  );
};

export default signup;
