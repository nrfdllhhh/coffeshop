import React from "react";
import styles from "./Tabel.module.css";

function Tabel({ menus }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Daftar Menu</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Promo</th>
              <th>Tipe</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, index) => (
              <tr key={index}>
                <td>{menu.name}</td>
                <td>Rp {parseInt(menu.price).toLocaleString()}</td>
                <td>{menu.promo || "-"}</td>
                <td>{menu.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabel;
