import './App.css';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import ConnectGame from './connectGame.js'
import GameArea from './gameArea.js'
import Player1Area from './player1Area.js'
import Player2Area from './player2Area.js'
import SendMessage from './sendMessage';
import XOXGame from './xoxgame';
import {useState} from "react"
import { returnCardPhotoPath, obj_to_file_name } from './cardhelper';

var url = 'http://localhost:8080';

fetch(url + '/test/get').then((response) => response.json())
  .then((data) => console.log(data));


//initiate socket connection
function connectGame(username){
  
  
}



//updates game
function updateGame(gameStatus){
  
}

//make a move
function makeamove(card){
  
}

function sendMessage(message){
  
  
}


function App() {
  //create example cards and place their paths into props
  

  var gameState = Array(9).fill('x');
  return (
    <div className="App">
      {/* <button onClick={()=>setGameReady(true)}>Game ready!</button> */}
      
      <XOXGame gameState={gameState} />
      
    </div>
  );
}

export default App;
