import { useEffect, useState, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";
import StatusBar from "../../statusBar";
import XOXGame from "../../xoxgame";
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import { useNavigate } from "react-router-dom";



var url = "http://localhost:8080";
var stompClient = null;

var gameState = Array(9).fill(" _ ");
var myTurn = false;

function setGameState(gameStateFromServer){
  gameState = gameStateFromServer;
}


//game visuals will be displayed here

function Gamepage() {
    const [isGameStateChanged, setIsGameStateChanged] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const inputRef = useRef(null);
    const {gameId} = useParams();
    const navigate = useNavigate();

    var userId = localStorage.getItem("currentUser");
    var username = localStorage.getItem("currentUserName");

    const handleButtonClick = () => {

       //private String[] moveList;

      // private boolean isGameFinished;
      // private int moveCount;
      // private Game game;
      
      const payload = { 
        username: 'abelen'
      };
      const headers = {
        'content-type': 'application/json'
      };
      if (inputRef.current && inputRef.current.value) {
        console.log('Input value:', inputRef.current.value);
        // Do something with the input value here
        stompClient.send("/app/deneme",headers,JSON.stringify(payload))
      }
    };

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
          stompClient.subscribe("/topic/game/"+gameId, function(messageOutput){
           
            var obj = JSON.parse(messageOutput.body);

            setGameState(obj.moveList);
            myTurn = !myTurn;
            
            if(obj.isGameFinished){
              setGameFinished(prev=>!prev);
            }

            setIsGameStateChanged(prev=> !prev);
            
          });
        });

        return () => {
          stompClient.disconnect();
      };
      }, []);

  return (
    <div>
      <h1>Gamepage</h1>
      <XOXGame gameState={gameState} />
      <input type="text" ref={inputRef} />
      <button disabled={myTurn} onClick={handleButtonClick}>Submit</button>
      <StatusBar gameFinished={gameFinished} />
      {gameFinished && <button onClick={()=>{navigate("/")}}>New Game?</button>}
    </div>
  );
}

export default Gamepage;
