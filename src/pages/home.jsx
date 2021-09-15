import React, { useState } from "react";

import CardSetup from "../organism/CardSetup/CardSetup";
import StarterCard from "../molecules/StarterCard/StarterCard";
import SideBar from "../molecules/SideBar/SideBar";
import CategoriesMenu from "../molecules/CategoriesMenu/CategoriesMenu";
import { HomeStyles, TestLinkStyles, Wrapper } from "./home.styles";
import { cardData } from "../cardData";

const menuItems = ["all", ...new Set(cardData.map((item) => item.category))];

const Home = () => {
  const [cardVisible, setCardVisible] = useState(true);
  const [categories, setCategories] = useState(menuItems);
  const [cards, setCards] = useState(cardData);

  const filterCategory = (category) => {
    if (category === "all") {
      return setCards(cardData);
    }
    const newCards = cardData.filter((item) => item.category === category);
    setCards(newCards);
  };

  return (
    <>
      {/* <TestLinkStyles>
        <a href="">test</a>
      </TestLinkStyles> */}
      <SideBar />
      <Wrapper>
        <HomeStyles>
          <CategoriesMenu
            categories={categories}
            filterCategory={filterCategory}
            cardVisible={cardVisible}
            setCardVisible={setCardVisible}
          />
          <StarterCard
            cardVisible={cardVisible}
            setCardVisible={setCardVisible}
          />
          <CardSetup cards={cards} />
        </HomeStyles>
      </Wrapper>
    </>
  );
};

export default Home;

//TO-DO
