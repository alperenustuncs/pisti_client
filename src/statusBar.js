function StatusBar({gameFinished}) {
    return ( <div>{gameFinished ? "Finished" : "Continuning"}</div> );
}

export default StatusBar;