import React, { useState } from "react";
import { StarterCardStyles, StarterCardTextStyles } from "./StarterCard.styles";

const StarterCard = ({ cardVisible, setCardVisible }) => {
  return (
    <>
      <StarterCardStyles
        cardVisible={cardVisible}
        onClick={() => setCardVisible(false)}
      >
        <StarterCardTextStyles>Conversation Starters</StarterCardTextStyles>
      </StarterCardStyles>
    </>
  );
};

export default StarterCard;
