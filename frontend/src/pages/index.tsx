import Head from 'next/head';

import Header from '../components/Header';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início - Help.food</title>
        <meta name="description" content="Seu site preferido para procurar receitas" />
      </Head>

      <Header />
      <main>
        <section>
          <h2>Precisa de ajuda com comida?</h2>
          <p>
            Help.food é uma aplicação para pesquisar e compartilhar receitas com o mundo todo. Preparado para embarcar nessa viagem?
          </p>
          <button>
            Criar receita
            <img src="/icons/arrow-right.svg" alt="Criar receita" />
          </button>
        </section>
        <img src="/tasting.svg" alt="Imagem principal" />
      </main>
    </div>
  )
}
