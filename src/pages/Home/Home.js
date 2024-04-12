import React, { useState } from "react";
import FoodContainer from "../../components/FoodContainer/FoodContainer";
import Header from "../../components/Header/Header";
import MenuItems from "../../components/MenuItems/MenuItems";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <MenuItems category={category} setCategory={setCategory} />
      <FoodContainer category={category} />
    </div>
  );
};

export default Home;
