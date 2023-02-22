import { useCallback, useState } from "react";
import { PostWithoutAuth } from "../../services/HttpService";

function Entrypage() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFindGame = useCallback(() => {
    console.log("Sending username:", username);
    PostWithoutAuth("http://localhost:8080/simpleentry/", { username })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("currentUserName", result.username);
        localStorage.setItem("currentUser", result.userId);
      })
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <div>
      <h1>Sudoku</h1>
      <input
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={
        handleFindGame}>Find Game</button>
    </div>
  );
}

export default Entrypage;
