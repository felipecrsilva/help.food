import Head from "next/head";
import { useState, FormEvent } from "react";

import Header from "../components/Header";
import Button from "../components/Button";

import styles from "../styles/pages/Login.module.scss";

type User = {
  email: string;
  password: string;
}

export default function Login() {
  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  })

  function handleSubmit(e : FormEvent) {
    e.preventDefault()

    try {
      console.log(user)
    } catch (err) {
      alert('Erro! Falha no login, tente novamente.')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Help.food</title>
      </Head>

      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <input 
            type="email" 
            placeholder="Seu email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <input 
            type="password" 
            placeholder="Sua senha" 
            value={user.password} 
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <Button>Entrar</Button>
        </form>
        <img src="/cooking.svg" alt="Cooking Image" />
      </main>
    </div>
  );
}