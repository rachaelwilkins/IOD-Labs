function EmojiChanger() {

const moods = [
    {name: 'happy', image: '../../EmojiImages/happy emoji.jpg'},
    {name: 'sad', image: '../../EmojiImages/sad emoji.jpg'},
];

const handleDefaultMood = () => {
  setMood('happy')
}

return (
  <div className="MoodChanger">
    <h1>Exercise 3 - Emoji</h1>
    Current Mood: {'happy'}
    <button onClick={() => setMood()}>Change Mood</button>    
  </div>  
)
}

export default EmojiChanger;
