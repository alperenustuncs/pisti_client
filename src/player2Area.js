import styles from './player2Area.module.css'


function Player2Area({cards}) {
    console.log(cards)
    return ( <div>
        <h2>Player 2 Area</h2>
        <div>{cards.map((curr) => <img key={curr} src={"/cards/"+curr} alt="" />)}</div>
    </div> );
}

export default Player2Area;