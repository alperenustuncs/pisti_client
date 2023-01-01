import { useState } from "react";

function Entrypage() {
  const [username, setUsername] = useState("");

  const handleUsername = (username) => {
    setUsername(username);
  };

  const sendUsername = (username) => {
    //http post request the username
    var request = fetch("http://localhost:8080/simpleentry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username),
    });

    return request;
  };
  return (
    <div>
      <h1>Sudoku</h1>
      <input
        placeholder="Ismini gir"
        onChange={(i) => handleUsername(i.target.value)}
      />
      <button
        onClick={sendUsername(username)
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => console.log(err))}
      >
        Find Game
      </button>
    </div>
  );
}

export default Entrypage;
