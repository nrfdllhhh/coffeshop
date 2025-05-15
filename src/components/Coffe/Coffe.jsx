import styles from "./Coffe.module.css";

function Coffe({ coffeData }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Data Coffee Botsky</h2>
      <p className={styles.subtitle}>Jumlah item di menu kami saat ini.</p>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <p>Coffee</p>
          <h3>{coffeData.coffee}</h3>
        </div>
        <div className={styles.card}>
          <p>Drink</p>
          <h3>{coffeData.drink}</h3>
        </div>
        <div className={styles.card}>
          <p>Food</p>
          <h3>{coffeData.food}</h3>
        </div>
        <div className={styles.card}>
          <p>Snack</p>
          <h3>{coffeData.snack}</h3>
        </div>
      </div>
    </div>
  );
}

export default Coffe;
