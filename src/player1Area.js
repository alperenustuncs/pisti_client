import styles from './player1Area.module.css'
import './singleton.css'

//cards are paths of cards
function Player1Area
({cards}) {
    return ( <div>
        <h2> Player 1 area</h2>
     <div>{cards.map((curr) => <img key={curr} src={"/cards/"+curr} alt="" />)}</div>
    </div> );
}

export default Player1Area;