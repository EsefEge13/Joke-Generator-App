import { useState } from "react";
import Joke from "./components/Joke";
import JokeButton from "./components/JokeButton";
import { JokeContext } from "./components/context/JokeContext";

function App() {
  const [joke, setJoke] = useState("");
  return (
    <>
      <JokeContext.Provider value={{ joke, setJoke }}>
        <div>
          <h1>Joke Generator Using React and Joke API</h1>
          <JokeButton />
          <Joke />
        </div>
      </JokeContext.Provider>
    </>
  );
}

export default App;
