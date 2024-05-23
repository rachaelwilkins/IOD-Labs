import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1Greeting from './Components/Greeting'
import EmojiMoods from './Components/Emoji'
import BigCats from './Components/BigCats'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Lab1Greeting name='John'>
        <p>This is React - hope you like it as much as Gareth does.</p>
      </Lab1Greeting>
      <EmojiMoods/>
      <BigCats/> 
    </>

  )
}

export default App