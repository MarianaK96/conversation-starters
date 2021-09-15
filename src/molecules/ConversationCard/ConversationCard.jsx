import {
  ConversationCardStyles,
  CardTextStyles,
  CategoryTextStyles,
} from "./ConversationCard.styles";

const ConversationCard = ({ question, category }) => {
  return (
    <>
      <ConversationCardStyles category={category}>
        <CardTextStyles>{question}</CardTextStyles>
        <CategoryTextStyles>{category}</CategoryTextStyles>
      </ConversationCardStyles>
    </>
  );
};

export default ConversationCard;
