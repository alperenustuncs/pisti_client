import {useRef} from "react";
function SendMessage({sendMessage}){
    const username = useRef()
    return ( <div>
        <p>Enter a message</p>
        <input type="text" ref  ={username} />
        <button onClick={() => sendMessage(username.current.value)} >Send</button>
    </div> );
}

export default SendMessage;