
//game state is 9 length array consisting of 'x' 'o' or ' '
function stateToString(gameState){
    var xoxString = "";
    for(let i=0;i<gameState.length;i++){
        console.log(gameState[i]+'-')
        if(i%3 !== 1){
           xoxString += (gameState[i] + "|");
        }else{
            xoxString += (gameState[i] + "\n---------");
        }
    }
    return xoxString;
}
function XOXGame({gameState}) {
    //build string which represents gui
    var guiStr = stateToString(gameState);
    console.log(guiStr);
    return ( <div>
        <p>{guiStr}</p>
    </div> );
}

export default XOXGame;