import config from "../../confiq/QuizConfig";
import { useGameQuiz } from "../../context/QuizGameContext";
import { calculateScore } from "../../utils/calculatescore/calculateScore";
import Button from "../button/Button";
import { Wrapper } from "./EndGameStyle";

const EndGame = () => {
  const { answers } = useGameQuiz();

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <h1>End game</h1>
      <p>Your score is: {calculateScore(answers, config.points)} points</p>
      <Button onClick={handlePlayAgain}>Play again</Button>
    </Wrapper>
  );
};

export default EndGame;
