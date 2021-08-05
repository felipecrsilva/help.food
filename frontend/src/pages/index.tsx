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
    </div>
  )
}
