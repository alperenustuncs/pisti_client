import {useRef} from "react";
function ConnectGame({connect}) {
    const username = useRef()
    return ( <div>
        <p>Enter a username</p>
        <input type="text" ref={username} />
        <button onClick={() => connect(username.current.value)} >Connect a game</button>
    </div> );
    
}

export default ConnectGame;