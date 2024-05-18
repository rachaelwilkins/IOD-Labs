import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1Greeting from './Components/Greeting'
import BigCats from './Components/BigCats'
import AddCatForm from './Components/AddCatForm'
import EmojiChanger from './Components/Emoji'

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Lab1Greeting name='John'>
        <p>This is React - hope you like it as much as Gareth does.</p>
      </Lab1Greeting>
      <BigCats/>
      <AddCatForm/>
      <EmojiChanger/>      
    </>

  )
}

export default App