
import "./App.css"

import instaimg from "./components/icons8-insta.svg"
import whatsappimg from "./components/icons8-whatsapp.svg"
import youtubeimg from "./components/icons8-youtube.svg"
import facebookimg from "./components/facebook icon.png"
import twitterimg from "./components/twitter.png"
import marbelimg from "./components/marbel.webp"
import profimg from "./assets/WhatsApp Image 2024-09-20 at 8.07.10 AM.jpeg"
import sidedivimg from "./assets/sidediv.webp"
import contantimg from "./assets/bg.jpg"
import img from './components/f logo.png'
const App = () => {
  return (
    <>
    <header>
    <div className="header-container">
      {/* Base image */}
      <img
        className="base-image"
         src={marbelimg}
        alt="Profile"
      />

      {/* Content inside the header */}
      <div className="header-content">
        <h1 className="header-text"><b>Hi All 👋 i'm <br/><span className="nam"> Fizza Tahir</span> </b></h1>
        <div> <h2 className="contant">I do Code and<br/> make Contant <span className="span">About it!</span> </h2></div>
        <p className="sub-text">Studing in UOG, Student of CS(computer science),<br/>
        like to sleep,watch movies. currently living in Gujrat. Kind of a Fresher....</p>
      </div>

      {/* Another image (e.g., profile or other image) on the right side */}
      <img
        className="side-image"
         src={profimg}
        alt="Profile on Right"
      />
    </div>

  </header>

   
    <nav id="nav">
      <div>
  <a href='#EducationalHistory'>Educational History </a>
  <a href='#ProfessionalSkills'>Professional Skills</a>
  <a href="#ProfessionalProjects">Professional Projects</a>
  <a href="#Hobbies">Hobbies</a>
  <a href="#life-ambitions">Life Ambitions</a>
  <a href="#efforts-for-country">Efforts for Country</a>
  </div>
  <div>
  <a href="#Contact-Me">Contact Me</a>
  </div>
</nav>

<div className="div">
<div id="blank-div">
  <img className="leftdiv"src={sidedivimg} alt="img" />
</div>

<div id='main-contant'>

  <div id="EducationalHistory">

    <h2 className='nam'>Educational History</h2>
        
            <thead >
                <tr>
                    <th>Sr. No.</th>
                    <th>Degree Title</th>
                    <th>Passing Year</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>BSC</td>
                    <td>2022</td>
                    <td>1000</td>
                    <td>850</td>
                    <td>85%</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Bachelor of CS</td>
                    <td>2026</td>
                    <td>1000</td>
                    <td>920</td>
                    <td>92%</td>
                </tr>
            </tbody>
        </table>
  
  </div>

  <div id="ProfessionalSkills">
<h2 className='nam'>Professional Skills</h2>
<ol>
<li>Html</li>
<li>Jawa Script</li>
<li>CSS</li>
<li>React</li>
</ol>
   </div>

  <div id="ProfessionalProjects">
<h2 className='nam'>Professional Projects</h2>
<ol>
<li>Personal Portfolio in (css, Html)</li>
<li>Personal Portfolio in (React,External CSS)</li>
<li>Personal Portfolio in (React,inline CSS)</li>
<li>Personal data Form</li>
</ol>
   </div>

  <div id="Hobbies">
<h2 className='nam'>Hobbies</h2>
<ul>
<li>Calligraphy</li>
<li>Sleeping</li>
<li>watching movies</li>
<li>Art</li>
</ul>
   </div>

   <div id="life-ambitions">
    <h2 className='nam'>Life Ambitions</h2>
    <ul>
      <li className='nam'><b >Achieved</b></li>
      <ul>
        <li>Graduated from college</li>
        <li>Done 4 Semester </li>
        <li>Learned a new language</li>
        <li>Made a website </li>
      </ul>
      <li className='nam'><b >Struggling</b></li>
      <ul>
        <li>Achieving study-life balance</li>
        <li>Adjusting in uni life</li>
        <li>Learning to new languages</li>
        <li>meating new new people</li>
      </ul>
    </ul>
    </div>

    <div id="efforts-for-country">
    <h2 className='nam'>Efforts for Country</h2>
    <ul>
      <li className='nam'><b >Succeeded</b></li>
      <ul>
        <li>Studing in Pakistan</li>
        <li>learning new Skills</li>
        <li>Participated in voter education campaigns</li>
        <li>Donated to local charities for disaster relief</li>
      </ul>
      <li className='nam'><b >Struggling</b></li>
      <ul>
        <li>Advocating for policy change in environmental laws</li>
        <li>Raising awareness on public health initiatives</li>
        <li>Struggling in finding better job</li>
        <li>Getting involved in local government activities</li>
      </ul>
    </ul>
  </div>

  </div>
  <div id="end">
  <img className="rightdiv"src={sidedivimg} alt="img" />
  </div>
  </div>

<div id="Contact-Me">
  <footer>
  <div className="footer-container">
      {/* Base image for footer */}
      <img
       className="footer-image"
       src={contantimg}
      alt="Profile"
      />

      {/* Footer content (heading and icons) */}
      <div className="footer-content">
        <h2 className="footer-heading"><u>Contact Me:</u></h2>
        <h3 className="footer-email">Email: 22024119-112@uog.edu.pk</h3>

        {/* Social media icons */}
        <div className="social-icons">
        <a href="https://www.instagram.com/" target='_blank'><img src={instaimg} alt='icon' className='icons'></img></a>
  <a href="https://web.whatsapp.com/" target='_blank'><img src={whatsappimg} alt='icon' className='icons'></img></a>
  <a href="https://www.youtube.com/" target='_blank'><img src={youtubeimg} alt='icon' className='icons'></img></a>
  <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank'><img src={facebookimg} alt='icon' className='icons'></img></a>
  <a href="https://twitter.com/i/flow/login" target='_blank'><img src={twitterimg} alt='icon' className='icons'></img></a>
          
        </div>
      </div>
    </div>
    </footer>
  </div>
    </>
  )
}

export default App