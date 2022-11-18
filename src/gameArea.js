import styles from './gameArea.module.css'
import './singleton.css'

function GameArea({cards}) {

    console.log(cards[0])

    //number of remaning cards in the middle
    var num_card = cards.length;
    console.log(num_card);
    return (<div> 
        <p>Game Area</p>
    <div>
        {/* //only front card appears, the size of the deck is shown beside it. */}
        <div className={styles.float_left}>
            <img src={"/cards/"+cards[0]} key={cards[0]} />{num_card}
        </div>
        <div className={styles.float_right}>this is for GameArea</div>
        </div>
    </div> );
}

export default GameArea;    