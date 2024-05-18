function EmojiChanger() {
  
  const moods = [
    { name: "Happy", image: "../../EmojiImages/happy emoji.jpg" },
    { name: "Sad", image: "../../EmojiImages/sad emoji.jpg" },
  ];

  const handleBeHappy = () => {
    setMood("Happy")
  }

  return (
    <div className="MoodChanger">
      <h2>Exercise 3 - Emoji Changer</h2>
      <button onClick={() => setMood()}>Change Mood</button>
    </div>
  );
}

export default EmojiChanger;
