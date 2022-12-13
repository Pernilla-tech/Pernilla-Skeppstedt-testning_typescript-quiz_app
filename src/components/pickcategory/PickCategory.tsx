import { useState } from "react";

import config from "../../confiq/QuizConfig";
import { Category } from "../../interfaces/ICategory";
import { shuffleArray } from "../../utils/ShuffleArray";
import Button from "../button/Button";
import { Wrapper } from "./PickCategoryStyle";

type PickCategoryProps = {
  onCategoryPicked: (category: Category) => void;
};

const getRandomCategories = () => {
  const shuffledCategories = shuffleArray(config.categories);
  return shuffledCategories.slice(0, 3);
};

const PickCategory = ({ onCategoryPicked }: PickCategoryProps) => {
  const [categories] = useState(getRandomCategories);

  return (
    <Wrapper>
      <h1>Pick a category</h1>
      {categories.map((category) => (
        <Button
          data-testid="category-button"
          onClick={() => onCategoryPicked(category)}
          key={category.id}
        >
          {category.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default PickCategory;
