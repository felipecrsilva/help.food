import Image from "next/image";

import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
      <header className={styles.header}>
          <img src="/logo.svg" alt="HELP.FOOD" />
          <nav>
              <a href="#">Início</a>
              <a href="#">Receitas</a>
              <a href="#">Favoritos</a>
          </nav>
      </header>
  );
}