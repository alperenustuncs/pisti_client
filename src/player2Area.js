import styles from './player2Area.module.css'


function Player2Area({cards}) {
    console.log(cards)
    return ( <div>
        <p>Player 2 Area</p>
        <div>{cards.map((curr) => <img key={curr} src={"/cards/"+curr} alt="" />)}</div>
    </div> );
}

export default Player2Area;