import Row from "./row";

function XOXGame({gameState}) {
    //build string which represents gui
    return ( <div>
        <Row row={gameState.slice(0,3)}/>
        <br></br>
        <Row row={gameState.slice(3,6)}/>
        <br></br>
        <Row row={gameState.slice(6,9) }/>
    </div> );
}

export default XOXGame;