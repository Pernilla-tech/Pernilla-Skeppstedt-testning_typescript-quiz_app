import { useGameQuiz } from "../../context/QuizGameContext";
import { GameDifficulty } from "../../enums/Difficulty";
import { Region } from "../../enums/Region";
import Button from "../button/Button";
import { Wrapper } from "./StartGameStyle";

const StartGame = () => {
  const {
    startQuiz,
    playerName,
    setPlayerName,
    region,
    setRegion,
    difficulty,
    setDifficulty,
  } = useGameQuiz();

  const difficultys = [
    GameDifficulty.EASY,
    GameDifficulty.MEDIUM,
    GameDifficulty.HARD,
    GameDifficulty.RANDOM,
  ];
  const regions = [Region.SV, Region.BG];

  const handlePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = e.target.value;
    setPlayerName(enteredName);
  };

  const handleSelectDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value as GameDifficulty;
    setDifficulty(selectedDifficulty);
  };

  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value as Region;
    setRegion(selectedRegion);
  };

  return (
    <Wrapper>
      <div>
        <h1>Start quiz</h1>
        <input
          data-testid="playername-input"
          type="text"
          aria-label="Playername"
          value={playerName}
          placeholder="Enter your playername"
          onChange={handlePlayerName}
        />
      </div>
      <p>Select difficulty</p>
      <select
        data-testid="select-difficulty"
        onChange={handleSelectDifficulty}
        value={difficulty}
      >
        {difficultys.map((difficulty) => (
          <option value={difficulty} key={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
      <p>Select region</p>
      <select
        data-testid="select-region"
        onChange={handleSelectRegion}
        value={region}
      >
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>

      <Button
        data-testid="start-quiz-button"
        onClick={startQuiz}
        disabled={playerName === ""}
      >
        Start quiz
      </Button>
    </Wrapper>
  );
};
export default StartGame;
