import { useState } from "react";
import { getQuestion, QuestionNotFoundError } from "../api/API";

import { useGameQuiz } from "../context/QuizGameContext";
import { Answer } from "../interfaces/IAnswer";

import { Category } from "../interfaces/ICategory";
import { Question } from "../interfaces/IQuestion";
import AnswerQuestion from "./answerquestion/AnswerQuestion";
import PickCategory from "./pickcategory/PickCategory";

const Game = () => {
  const { difficulty, region, addAnswer } = useGameQuiz();

  const [question, setQuestion] = useState<Question | null>(null);

  const onCategoryPicked = (category: Category) => {
    setTimeout(() => {
      const callGetQuestion = (): Promise<void> => {
        return getQuestion(difficulty, region, category)
          .then((question) => setQuestion(question))
          .catch((err: any) => {
            if (err instanceof QuestionNotFoundError) {
              return callGetQuestion();
            } else {
              throw err;
            }
          });
      };
      callGetQuestion().catch((err: any) => {
        alert(err.message);
      });
    }, 3000);
  };
  const onAnswer = (answer: Answer) => {
    addAnswer(answer);

    setQuestion(null);
  };

  return question === null ? (
    <PickCategory onCategoryPicked={onCategoryPicked} />
  ) : (
    <AnswerQuestion question={question} onAnswer={onAnswer} />
  );
};

export default Game;
