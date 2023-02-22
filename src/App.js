import "./App.css";
import React, { useState, useRef, useCallback } from "react";
import ConnectGame from "./connectGame.js";
import GameArea from "./gameArea.js";
import Player1Area from "./player1Area.js";
import Player2Area from "./player2Area.js";
import SendMessage from "./sendMessage";
import XOXGame from "./xoxgame";
import StatusBar from "./statusBar";

import { returnCardPhotoPath, obj_to_file_name } from "./cardhelper";
import EntryPage from "./components/Entrypage/Entrypage";
import GamePage from "./components/Game/Gamepage";

import {Link, Route, Routes} from "react-router-dom"
import GameInformation from "./components/Game/GameInformation";



//initiate socket connection
function connectGame(username) {}

//updates game
function updateGame(gameStatus) {}

//make a move
function makeamove(card) {
  
}

function sendMessage(message) {}



function App() {
  console.log("creating app");
  

  

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/game_information/3">Game Information</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
        <Route path="/game_information/:id" element={<GameInformation />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
