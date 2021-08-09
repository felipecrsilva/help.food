import { ReactNode } from "react";

import styles from "../styles/components/Button.module.scss";

type ButtonProps = {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>{ children }</button>
  );
}