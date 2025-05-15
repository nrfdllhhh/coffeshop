import styles from "./Coffecard.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Choffe Botsky</h2>
          <h3 className={styles.hero__genre}>
            Coffe Botsky merupakan coffe ternama diparung. Coffe ini cocok untuk para programmer yang ingin rehat dari kode erornya
          </h3>
          <p className={styles.hero__description}>
           Minum kopi kapal api, kopinya diminum kapalnya dijual apinya buat bakar kamu yang udah ninggalin aku pas lagi sayang-sayangnya
          </p>
          <button className={styles.hero__button}>Profil</button>
        </div>
        <div className={styles.hero__right}>
        <img
  className={styles.hero__image}
  src="/images/Coffecoffe.jpg"
  alt="Coffe Botsky"
/>

        </div>
      </section>
    </div>
  );
}

export default Hero;
