import React, { useState } from "react";

import ConversationCard from "../../molecules/ConversationCard/ConversationCard";
import StarterCard from "../../molecules/StarterCard/StarterCard";
import { NextIcon, PrevIcon } from "../../molecules/NextIcon/NextIcon.jsx";
import { cardData } from "../../cardData";
import {
  CardSetupStyles,
  NextIconStyles,
  IconStyles,
} from "./CardSetup.styles";

const CardSetup = ({ cards, cardVisible, setCardVisible }) => {
  const [index, setIndex] = useState(0);
  // const [cards, setCards] = useState(cardData);
  const { question, category } = cards[index];
  //need to set the array used to a state DONE
  //can then use setCards to set it to a different array when the button is clicked

  const nextCard = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevCard = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (number) => {
    if (number === cards.length) {
      return 0;
    } else if (number < 0) {
      return cards.length - 1;
    }
    return number;
  };

  //what is going on here?...
  //if the index is equal to the length of the data array (the last one) return 0 (the start of the array)
  //if the index is more than 0 (so more than the first one) return? Don't understand this
  //because if I simply do 'index - 1' it will give me -1 which doesn't make sense
  //if the number I pass in is -1 (so less than 0), so instead I need to find the length of the data array and to
  //get to the second to last one (etc) I just minus one and return that number

  return (
    <>
      <CardSetupStyles>
        <StarterCard
          cardVisible={cardVisible}
          setCardVisible={setCardVisible}
        />
        <ConversationCard question={question} category={category} />
        <IconStyles>
          <NextIconStyles onClick={prevCard}>
            <PrevIcon />
          </NextIconStyles>
          <NextIconStyles onClick={nextCard}>
            <NextIcon />
          </NextIconStyles>
        </IconStyles>
      </CardSetupStyles>
    </>
  );
};

export default CardSetup;
