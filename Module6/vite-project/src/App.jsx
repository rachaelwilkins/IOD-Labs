import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/UserInfo'
import './Components/ContactInfo'

function App() {
  
  const jsxCode = <p>Paragraph Injected by Variable</p>
  const idname = 'paragraph 1'

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<div>
 <h3>{spiderman.name}</h3>
 <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);
}

function Welcome(props) {
  return (
  <div className="componentBox">
  <h3>Welcome {props.name}!</h3>
  </div> 
  )
 }
 
  function handleButtonClick(){
    //WIP
  }

  return 
   <>
   <h1>My First React App</h1>
   <label>UserName</label>
   <p id='p1'>This is a paragraph.</p>
   <button>onClick={handleButtonClick}Click This</button>
   {jsxCode}  {/* this is how you embed expressions in JSX, curly brackets */} 
   {spideyJSX}
   <UserInfo></UserInfo> {/* how to inject a component*/} 
   <contact></contact>
   </>


export default App

{/* this is how to comment in JSX */} 
// 