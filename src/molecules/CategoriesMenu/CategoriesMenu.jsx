import { cardData } from "../../cardData";
import { MenuBtnStyles } from "./CategoriesMenu.styles";

const CategoriesMenu = ({ categories, filterCategory, cardVisible }) => {
  return (
    <>
      <MenuBtnStyles cardVisible={cardVisible}>
        {categories.map((item, index) => {
          return (
            <button key={index} onClick={() => filterCategory(item)}>
              {item}
            </button>
          );
        })}
      </MenuBtnStyles>
    </>
  );
};

export default CategoriesMenu;
