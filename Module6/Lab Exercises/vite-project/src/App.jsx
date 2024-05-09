import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullName from '../../../FullName'
import ComplexComment from '../../../ComplexComment'
import AuthorInfo from '../../../AuthorInfo'
import Callout from '../../../CallOut'
import MoviesList from '../../../MovieList'


function App() {
  const [count, setCount] = useState(0)

  // object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: { // author is also an object
  name: 'Hello Kitty',
  avatarUrl: 'https://placekitten.com/g/64/64',
  },
 }; 

 function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

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
      
      <FullName firstName="Rachael"></FullName><FullName lastName="Wilkins"></FullName>
      <ComplexComment author={comment.author} date={comment.date} text={comment.text}></ComplexComment>

      <AuthorInfo avatarUrl={props.author.avatarUrl}></AuthorInfo>
      <Comment-date> date={props.date.toLocaleString()}</Comment-date>

      <MoviesList></MoviesList>

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
    </>
  )
}

export default App
