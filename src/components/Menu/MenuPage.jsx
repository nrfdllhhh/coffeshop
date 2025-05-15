// MenuPage.jsx
import React, { useState } from "react";
import Tabel from "../Tabel/Tabel";
import Form from "../Form/Form";

const MenuPage = () => {
  const [menuList, setMenuList] = useState([
    {
      name: "Americano",
      price: "25000",
      promo: "Buy 1 Get 1",
      type: "coffee",
    },
    {
      name: "Croissant",
      price: "18000",
      promo: "",
      type: "food",
    },
    {
      name: "Lemon Tea",
      price: "20000",
      promo: "Free Ice",
      type: "drink",
    },
  ]);

  const handleAddMenu = (newMenu) => {
    setMenuList((prev) => [...prev, newMenu]);
  };

  return (
    <div>
      <Tabel menus={menuList} />
      <Form onAdd={handleAddMenu} />
    </div>
  );
};

export default MenuPage;
