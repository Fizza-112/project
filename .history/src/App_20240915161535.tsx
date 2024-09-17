
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
    <nav id="nav">
      <div id="">
        
  <a href='#EducationalHistory'>Educational History </a>
  
  <a href='prof'>Professional Skills</a>
  <a href="profs">Professional Projects</a>
  <a href="">Hobbies</a>
  <a href="">Life Ambitions</a>
  <a href="">Efforts for Country</a>
  </div>
  <div>
  <a href="">Contact Me</a>
  </div>
</nav>
<
  <div id="EducationalHistory">

    <h2 id="edh">Educational History </h2>
    <table>
  <tr>
    <td>Sr. No</td>
   <td>Degree Title</td>
    <td>Passing Year</td>
    <td>Total Marks</td>
    <td>Obtained Marks</td>
       <td>Percentage</td>
  </tr>
  </table>
  </div>

   
    </>
  )
}

export default App