import { useState } from "react";

interface MessageProps {
    messages: string[];
}
export default function Greeting({messages}: MessageProps) {
    
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [ greeting, setGreeting ] = useState(randomMessage());

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick = {() => setGreeting(randomMessage())}>New Greeting</button>
        </div>
    )
}