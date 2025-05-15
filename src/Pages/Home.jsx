import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Coffecard from "../components/CoffeCard/CoffeCard";
import Coffe from "../components/Coffe/Coffe";
import Tabel from "../components/Tabel/Tabel";
import Form from "../components/Form/Form";

function Home() {
  const [menuData, setMenuData] = useState([
    { name: "Kopi Hitam", price: "15000", promo: "Diskon 10%", type: "coffee" },
    { name: "Es Teh", price: "8000", promo: "", type: "drink" },
  ]);

  const [coffeData, setCoffeData] = useState({
    coffee: 1,
    drink: 1,
    food: 0,
    snack: 0,
  });

  const handleAddItem = (newItem) => {
    const updatedMenuData = [...menuData, newItem];
    setMenuData(updatedMenuData);

    const validTypes = ["coffee", "drink", "food", "snack"];
    if (validTypes.includes(newItem.type)) {
      setCoffeData((prev) => ({
        ...prev,
        [newItem.type]: prev[newItem.type] + 1,
      }));
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <Coffecard />
        <Coffe coffeData={coffeData} />
        <Tabel menus={menuData} />
        <Form onAdd={handleAddItem} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
