import './App.css';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import ConnectGame from './connectGame.js'
import GameArea from './gameArea.js'
import Player1Area from './player1Area.js'
import Player2Area from './player2Area.js'
import { returnCardPhotoPath, obj_to_file_name } from './cardhelper';

const url = 'http://localhost:8080'
var stompClient = null;

//initiate socket connection
function connectGame(username){
  console.log(username)
  var socket = new SockJS(url+'/chat');
  stompClient = Stomp.over(socket);  
  stompClient.connect({}, function(frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/messages', function(messageOutput) {
        updateGame(messageOutput);
    });
});
}



//updates game
function updateGame(gameStatus){
  
}

//make a move
function makeamove(card){
  
}



function App() {
  //create example cards and place their paths into props

  var player1cards = [{type:"sinek", description:"1"},{type:"sinek", description:"2"},{type:"sinek", description:"3"}]
  var player2cards = [{type:"karo", description:"3"},{type:"maca", description:"4"},{type:"karo", description:"5"}]
  var cardsInTheMiddle = [{type:"kupa", description:"papaz"},{type:"kupa", description:"2"},{type:"kupa", description:"9"}]
  
  var num_remanining_cards=10;
  return (
    <div className="App">
      <ConnectGame connect={connectGame}/>
      <Player1Area cards={player1cards.map((curr)=>obj_to_file_name(curr)+'.png')}/>
      <GameArea cards={cardsInTheMiddle.map((curr)=>obj_to_file_name(curr)+'.png')} num_remanining_cards={num_remanining_cards}/>
      <Player2Area cards={player2cards.map((curr)=>obj_to_file_name(curr)+'.png')}/>
    </div>
  );
}

export default App;
