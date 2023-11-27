import React from "react";
import styles from "./NotFoundBlock.module.scss";
export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>dwa
      <h1>
        <span>😞</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует!
      </p>
    </div>
  );
};
