import { useContext } from "react";
import { JokeContext } from "./context/JokeContext";

function JokeButton() {
  const { setJoke } = useContext(JokeContext);

  const generateJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <button onClick={() => generateJoke()}>Click to generate a joke</button>
  );
}

export default JokeButton;
