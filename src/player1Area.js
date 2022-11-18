import styles from './player1Area.module.css'
import './singleton.css'

//cards are paths of cards
function Player1Area
({cards}) {
    return ( <div>
        <p> Player 1 area</p>
     <div>{cards.map((curr) => <img key={curr} src={"/cards/"+curr} alt="" />)}</div>
    </div> );
}

export default Player1Area;