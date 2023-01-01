import { useEffect, useState } from "react";
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

    useEffect(() => {
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
