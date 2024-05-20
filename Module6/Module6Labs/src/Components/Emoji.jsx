import { useState } from "react";

function emojiMoods() {

    const emojiTypes = [
        { name: 'happy', image: '../../EmojiImages/happy emoji.jpg' },
        { name: 'sad', image: '../../EmojiImages/sad emoji.jpg' },
    ]    

    const [emoji, setEmoji] = useState(emojiTypes.happy.image);

    function switchMood() {
        if (emoji == emojiList.happy.image) {
            setEmoji(emojiList.sad.image)            
        } else if (emoji == emojiList.sad.image) {
            setEmoji(emojiList.happy).image;
        }
    }

    return (
        <>
            <h1>Exercise 3 - Emojis</h1>
            <div>
                <button onClick={switchMood}>Change mood</button>
            </div>
        </>
    )
}

export default emojiMoods;