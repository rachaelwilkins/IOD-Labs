import { useState } from "react";

function EmojiMoods() {
 
    const happy= '../../EmojiImages/happy emoji.jpg' 
    const sad= '../../EmojiImages/sad emoji.jpg' 

    const [emoji, setEmoji] = useState(happy);

    function switchMood() {
        if (emoji == happy) {
            setEmoji(sad)            
        } else if (emoji == sad) {
            setEmoji(happy);
        }
    }

    return (
        <>
            <h1>Exercise 3 - Emojis</h1>
            <img src={emoji}></img>
            <div>
                <button onClick={switchMood}>Change mood</button>
            </div>
        </>
    )
}

export default EmojiMoods;