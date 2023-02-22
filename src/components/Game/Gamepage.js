import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusBar from "../../statusBar";
import XOXGame from "../../xoxgame";
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";

var url = "http://localhost:8080";
var stompClient = null;

var gameState = Array(9).fill("o");
//game visuals will be displayed here

function Gamepage() {
    const [isGameStateChanged, setIsGameStateChanged] = useState(false);
    const [gameStatus, setGameStatus] = useState(false);
    const {gameId} = useParams();

    useEffect(() => {
      console.log(gameId);
        var socket = new SockJS(url + "/chat");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
          stompClient.subscribe("/topic/messages", function (messageOutput) {
            console.log(JSON.parse(messageOutput.body)); 
    
            // TODO
            // check if game status is changed,
            // if changed setGameStatus
    
            // console.log(JSON.parse(messageOutput.body));
          });
          stompClient.send("/app/chat", {}, "Hello, server!");
        });
      }, []);
  return (
    <div>
      <h1>Gamepage</h1>
      <XOXGame gameState={gameState} />
      <StatusBar gameStatus={gameStatus} />
    </div>
  );
}

export default Gamepage;
