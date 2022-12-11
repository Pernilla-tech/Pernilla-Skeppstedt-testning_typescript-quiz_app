import config from "../../confiq/QuizConfig";
import { useGameQuiz } from "../../context/QuizGameContext";
import { calculateScore } from "../../utils/calculatescore/calculateScore";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid #646cff;
  padding: 30px;
`;

const EndGame = () => {
  const { answers } = useGameQuiz();
  return (
    <Wrapper>
      <h1>End game</h1>
      <p>Your score is: {calculateScore(answers, config.points)} points</p>
    </Wrapper>
  );
};

export default EndGame;
