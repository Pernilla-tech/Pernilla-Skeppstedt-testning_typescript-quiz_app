import React from "react";
import EndGame from "./components/endgame/EndGame";
import Game from "./components/Game";
import StartGame from "./components/StartGame/StartGame";

import config from "./confiq/QuizConfig";
import { useGameQuiz } from "./context/QuizGameContext";

function App() {
  const { screen, answers } = useGameQuiz();

  return (
    <div>
      {screen === "start" ? (
        <StartGame />
      ) : answers.length === config.totalQuestions ? (
        <EndGame />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
