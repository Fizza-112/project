
import React from 'react'
import "./App.css"
import profileimg from "./assets/WhatsApp Image 2024-09-06 at 9.05.18 AM.jpeg"

const App = () => {
  return (
    <>
    <header>
    <div> <h1 id='name'>Fizza Tahir</h1>
    <p id="intro">Studing IN UOG, Student of CS(computer science), like to sleep,watch movies. currently living in Gujrat. Kind of a Fresher....</p>
    </div>
    <div>
      <img  src={profileimg} alt='image' id="image"/>
    </div>
    </header>
    <nav>
  <a href=''>Educational History</a>
  <a>Professional Skills</a>
  <a>Professional Projects</a>
  <a>Hobbies</a>
  <a>Life Ambitions</a>
  <a>Efforts for Country</a>
  <a>Contact Me</a>
    </nav>
    </>
  )
}

export default App