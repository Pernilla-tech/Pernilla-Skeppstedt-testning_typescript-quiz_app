import { QuestionDifficulty } from "../enums/Difficulty";
import { Category } from "../interfaces/ICategory";

const CATEGORIES: Category[] = [
  {
    id: "arts_and_literature",
    name: "Arts & Literature",
  },
  {
    id: "film_and_tv",
    name: "Film & TV",
  },
  {
    id: "food_and_drink",
    name: "Food & Drink",
  },
  {
    id: "general_knowledge",
    name: "General Knowledge",
  },
  {
    id: "geography",
    name: "Geography",
  },
  {
    id: "history",
    name: "History",
  },
  {
    id: "music",
    name: "Music",
  },
  {
    id: "science",
    name: "Science",
  },
  {
    id: "society_and_culture",
    name: "Society & Culture",
  },
  {
    id: "sport_and_leisure",
    name: "Sport & Leisure",
  },
];

const TIME = 30;
const TOTAL_QUESTIONS = 9;
const POINTS = {
  [QuestionDifficulty.EASY]: 1,
  [QuestionDifficulty.MEDIUM]: 2,
  [QuestionDifficulty.HARD]: 3,
};

const config = {
  totalQuestions: TOTAL_QUESTIONS,
  points: POINTS,
  categories: CATEGORIES,
  time: TIME,
};

export default config;
