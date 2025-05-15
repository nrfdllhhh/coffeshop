import React, { useState } from "react";
import styles from "./Form.module.css";

function Form({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    promo: "",
    type: "coffee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", price: "", promo: "", type: "coffee" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Tambah Menu</h2>
      <div className={styles.formGroup}>
        <label>Nama Menu</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Harga</label>
        <input name="price" type="number" value={formData.price} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Promo</label>
        <input name="promo" value={formData.promo} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label>Tipe</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="coffee">Coffee</option>
          <option value="drink">Drink</option>
          <option value="food">Food</option>
          <option value="snack">Snack</option>
        </select>
      </div>
      <button className={styles.button} type="submit">Tambahkan</button>
    </form>
  );
}

export default Form
