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
    Current Mood: {mood}
    <button onClick={() => setMood('sad')}>Sad</button>
  </div>  
)
}

export default EmojiChanger;
