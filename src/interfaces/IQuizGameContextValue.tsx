import { GameDifficulty } from "../enums/Difficulty";
import { Region } from "../enums/Region";
import { Screens } from "../enums/Screens";
import { Answer } from "./IAnswer";

export interface QuizGameContextValue {
  screen: Screens;
  playerName: string;
  difficulty: GameDifficulty;
  region: Region;
  addAnswer: (answer: Answer) => void;
  answers: Array<Answer>;
  startQuiz: () => void;
  setPlayerName: (playerName: string) => void;
  setRegion: (region: Region) => void;
  setDifficulty: (difficulty: GameDifficulty) => void;
}
