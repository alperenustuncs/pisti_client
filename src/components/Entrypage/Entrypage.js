import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostWithoutAuth } from "../../services/HttpService";

function Entrypage() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleFindGame = useCallback(() => {
    setLoading(true);
    PostWithoutAuth("http://localhost:8080/simpleentry/", { username })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("currentUserName", result.username);
        localStorage.setItem("currentUser", result.userId);
        navigate(`/game/${result.gameId}`); // redirect to game page
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [username, navigate]);

  return (
    <div>
      <h1>Sudoku</h1>
      <input
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button disabled={loading} onClick={handleFindGame}>
        {loading ? "Loading..." : "Find Game"}
      </button>
    </div>
  );
}

export default Entrypage;
