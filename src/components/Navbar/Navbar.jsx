import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoBrand}>
          <img src="{`${import.meta.env.BASE_URL}/images/logo.png" alt="Logo Coffee Botsky" className={styles.logo} />
          <h1 className={styles.navbar__brand}>Coffe Botsky</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Drink</li>
            <li className={styles.navbar__item}>Food</li>
            <li className={styles.navbar__item}>Reservasi</li>
            <li className={styles.navbar__item}>Tentang Kami</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
