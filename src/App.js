import './App.css';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import ConnectGame from './connectGame.js'
import GameArea from './gameArea.js'
import Player1Area from './player1Area.js'
import Player2Area from './player2Area.js'
import SendMessage from './sendMessage';
import {useState} from "react"
import { returnCardPhotoPath, obj_to_file_name } from './cardhelper';

const url = 'http://localhost:8080'
var stompClient = null;
var socket = new SockJS('http://127.0.0.1:8080/chat');
stompClient = Stomp.over(socket);
stompClient.connect({}, (frame) => {
  console.log('ebenin ami');
  stompClient.subscribe('/topic/messages', function(messageOutput) {
    console.log(JSON.parse(messageOutput.body));
});
  
  console.log(frame);
})


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
  //fetching testi
  // const message_url = url+'/game/pingMessage';
  // fetch(message_url,{method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // },
  //  body: JSON.stringify({
  //   username: message
  //  })
  // }
  //  ).then(res=> res.json()).then(data => console.log(data))
  console.log(message)
  stompClient.send("/app/chat", {}, "anan zaa");
}


function App() {
  //create example cards and place their paths into props
  console.log('processing app')
  const [gameReady, setGameReady] = useState(false);
  var player1cards = [{type:"sinek", description:"1"},{type:"sinek", description:"2"},{type:"sinek", description:"3"}]
  var player2cards = [{type:"karo", description:"3"},{type:"maca", description:"4"},{type:"karo", description:"5"}]
  var cardsInTheMiddle = [{type:"kupa", description:"papaz"},{type:"kupa", description:"2"},{type:"kupa", description:"9"}]
  
  var num_remanining_cards=10;

  var the_game = (<div>
    <Player1Area cards={player1cards.map((curr)=>obj_to_file_name(curr)+'.png')}/>
      <GameArea cards={cardsInTheMiddle.map((curr)=>obj_to_file_name(curr)+'.png')} num_remanining_cards={num_remanining_cards}/>
      <Player2Area cards={player2cards.map((curr)=>obj_to_file_name(curr)+'.png')}/>
      </div>
  )

  
  return (
    <div className="App">
      {/* <button onClick={()=>setGameReady(true)}>Game ready!</button> */}
      <SendMessage sendMessage={sendMessage} />
      <ConnectGame connect={connectGame}/>
      {gameReady ? the_game : null}
    </div>
  );
}

export default App;
