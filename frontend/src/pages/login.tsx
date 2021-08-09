import Head from "next/head";
import { FormEvent } from "react";

import Header from "../components/Header";
import Button from "../components/Button";

import styles from "../styles/pages/Login.module.scss";

export default function Login() {
  function handleSubmit(e : FormEvent) {
    e.preventDefault()
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
          <input type="text" placeholder="Seu email" />
          <input type="password" placeholder="Sua senha" />
          <Button>Entrar</Button>
        </form>
        <img src="/cooking.svg" alt="Cooking Image" />
      </main>
    </div>
  );
}