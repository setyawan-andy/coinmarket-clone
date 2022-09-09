import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Hello World!
      <div className={styles.trending} />
      <div className={styles.cmc_table} />
    </div>
  );
};

export default Home;
