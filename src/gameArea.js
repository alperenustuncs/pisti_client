import styles from './gameArea.module.css'
import './singleton.css'

function GameArea({cards, num_remanining_cards}) {

    console.log(cards[0])

    //number of remaning cards in the middle
    var num_card = cards.length;
    console.log(num_card);
    return (<div>
        <h2>Game Area</h2>
    <div>
        {/* //only front card appears, the size of the deck is shown beside it. */}
        <div>
            <img src={"/cards/"+cards[0]} key={cards[0]} />{num_card}
        </div>
        <div>
            <h3>Num of remaining cards: {num_remanining_cards}</h3>
        </div>
    </div>
    </div> );
}

export default GameArea;    