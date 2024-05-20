function emojiMoods() {

    const emojiList = [
        { name: 'happy', image: '../../EmojiImages/happy emoji.jpg' },
        { name: 'sad', image: '../../EmojiImages/sad emoji.jpg' },
    ]    

    const [emoji, setEmoji] = useState(emojiList.happy);

    function switchMood() {
        if (emoji == emojiList.happy) {
            setEmoji(emojiList.sad)            
        } else if (emoji == emojiList.sad) {
            setEmoji(emojiList.happy);
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