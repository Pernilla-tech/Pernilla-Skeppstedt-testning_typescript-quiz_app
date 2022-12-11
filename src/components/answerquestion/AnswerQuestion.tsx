import config from "../../confiq/QuizConfig";
import { useCountDown } from "../../hooks/useCountDown";

import { useGameQuiz } from "../../context/QuizGameContext";
import { Answer } from "../../interfaces/IAnswer";
import { useCallback, useEffect, useState } from "react";
import { Question } from "../../interfaces/IQuestion";
import { ButtonVariant } from "../../enums/ButtonVariant";
import styled from "styled-components";
import Button from "../button/Button";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameInfo = styled.div`
  border: #646cffaa 2px solid;
`;

const QuestionDisplay = styled.div`
  margin: 2px;
`;

type AnswerQuestionProps = {
  question: Question;
  onAnswer: (answer: Answer) => void;
};

const AnswerQuestion: React.FC<AnswerQuestionProps> = ({
  question,
  onAnswer,
}) => {
  const { answers, playerName } = useGameQuiz();
  const [timer] = useCountDown(config.time);
  const [answerEntry, setAnswerEntry] = useState<Answer | null>(null);

  const checkAnswer = useCallback(
    (answer: string) => {
      if (answerEntry != null) return; //Gör att det ej går att klicka på flera alternativ

      const correct = answer === question.correctAnswer;
      setAnswerEntry({
        answer,
        correct,
        difficulty: question.difficulty,
        timeLeft: timer,
      });
    },
    [answerEntry, question.correctAnswer, question.difficulty, timer]
  );

  const handleNextQuestion = () => {
    onAnswer(answerEntry!); //! betyder att jag garanterar att den inte är null
  };

  //När tiden har gått ut blir knapparna röda och du har inte längre möjlighet att svara
  useEffect(() => {
    if (timer === 0) {
      checkAnswer("");
    }
  }, [checkAnswer, timer]);

  return (
    <div>
      <GameInfo>
        <p>Player: {playerName}</p>
        <p>Difficulty: {question.difficulty}</p>
      </GameInfo>
      <QuestionWrapper>
        <QuestionDisplay>
          <h2>
            Question: {answers.length + 1} / {config.totalQuestions}
          </h2>
          <span>
            {answerEntry === null ? <p>Time Left: {timer} sek</p> : null}

            <br />
            {answerEntry?.timeLeft === 0 && (
              <span>Times out, try a new question</span>
            )}
          </span>
          <h2>{question.question}</h2>
        </QuestionDisplay>

        {question.answers.map((answer: string) => (
          <Button
            key={answer}
            data-testid="check-answer-button"
            onClick={() => checkAnswer(answer)}
            variant={
              answerEntry === null
                ? undefined
                : answer === answerEntry.answer && answerEntry.correct
                ? ButtonVariant.RightAnswer
                : ButtonVariant.WrongAnser
            }
          >
            {answer}
          </Button>
        ))}
      </QuestionWrapper>
      <Button
        data-testid="next-question-button"
        onClick={handleNextQuestion}
        disabled={answerEntry == null}
        variant={ButtonVariant.NextQuestion}
      >
        Next question
      </Button>
    </div>
  );
};

export default AnswerQuestion;
