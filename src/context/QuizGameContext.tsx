import { createContext, useContext, useState } from "react";
import { GameDifficulty } from "../enums/Difficulty";
import { Region } from "../enums/Region";
import { Screens } from "../enums/Screens";
import { Answer } from "../interfaces/IAnswer";
import { QuizGameContextValue } from "../interfaces/IQuizGameContextValue";
import { QuizProviderProps } from "../interfaces/IQuizProvider";

export const QuizGameContext = createContext<QuizGameContextValue>({
  screen: Screens.START,
  answers: [],
  difficulty: GameDifficulty.EASY,
  region: Region.SV,
  playerName: "",
  startQuiz: () => {},
  addAnswer: () => {},
  setDifficulty: () => {},
  setRegion: () => {},
  setPlayerName: () => {},
});

export const useGameQuiz = () => {
  return useContext(QuizGameContext);
};
export const QuizGameProvider = ({ children }: QuizProviderProps) => {
  const [difficulty, setDifficulty] = useState(GameDifficulty.EASY);
  const [playerName, setPlayerName] = useState("");
  const [region, setRegion] = useState<Region>(Region.SV);
  const [screen, setScreen] = useState<Screens>(Screens.START);
  const [answers, setAnswers] = useState<Array<Answer>>([]);

  const startQuiz = () => {
    setScreen(Screens.GAME);
  };

  const addAnswer = (answer: Answer) => {
    setAnswers([...answers, answer]);
  };

  return (
    <QuizGameContext.Provider
      value={{
        startQuiz,
        addAnswer,
        answers,
        playerName,
        difficulty,
        region,
        screen,
        setDifficulty,
        setRegion,
        setPlayerName,
      }}
    >
      {children}
    </QuizGameContext.Provider>
  );
};
