import React from "react";

const CategoryIcon = ({
  IngredientCategory,
}: {
  IngredientCategory: string[];
}) => {
  const [kor_category, eng_category] = IngredientCategory;
  return (
    <div className={["category-wrapper"].join(" ")}>
      <img
        className="category__img"
        src={`/img/category/${eng_category}.png`}
        alt="Ingredient category img"
      />
      <a className="txt-dark">{kor_category}</a>
    </div>
  );
};

export default CategoryIcon;
