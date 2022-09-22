import React from 'react'

import './App.css';
import './Mq.css';







import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import WorkSamples from './Components/WorkSamples';
import DownloadResume from './Components/DownloadResume';
import Contact from './Components/Contact';


import {BrowserRouter, Routes, Route  } from "react-router-dom";
import SoundBtn from './Components/SoundBtn';








function App() {

  function home(){
    console.log("hoemfunction is runing")
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary fw-bold'>I am a self made web developer</h1><div className='row text-center'>
       
    `
        document.querySelector(".homeAnimatedText").style.color = "yellow";
       /* document.querySelector(".homeAnimatedText").style.fontSize = "3.1rem";*/
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.border = "2px double yellow";
      }, 1000);
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary'>and</h1>`
        document.querySelector(".homeAnimatedText").style.color = "red";
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.borderColor = "red"
      }, 3000);
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary'>still on the path of learning new techniques.</h1>`
        document.querySelector(".homeAnimatedText").style.color = "green";
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.borderColor = "green"
      }, 5000);
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary'>I believe with the changing scenerios in modern world ,</h1>`
        document.querySelector(".homeAnimatedText").style.color = "purple";
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.borderColor =  "purple"
      }, 7000);
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary'>One should develop news skills rather than just degrees..</h1>`
        document.querySelector(".homeAnimatedText").style.color = "orange";
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.borderColor = "orange"
      }, 9000);
      setTimeout(() => {
        document.querySelector(".homeAnimatedText").innerHTML = `<h1 className='text-center text-primary'>I consider myself as a creator, Just share your Idea with me and I will draft it for you!!!</h1>`
        document.querySelector(".homeAnimatedText").style.color = "yellow";
        
        document.querySelector(".homeAnimatedText").style.textAlign = "center"
        document.querySelector(".homeAnimatedText").style.Transition = "0.5s"
        document.querySelector(".myimground").style.borderColor = "yellow"
      }, 11000);
      
   
   


    
    
    
   
  }
  
   /*audiovariable*/
   var audio = new Audio('audio.mp3');
 function playSound(){
    console.log("playing the music ")
     audio.play();
    document.querySelector(".playSound").style.display= "none"
    document.querySelector(".pauseSound").style.display= "block"

  }
  function pauseSound(){
    console.log("stop the music ")
    audio.pause();
    document.querySelector(".playSound").style.display= "block"
    document.querySelector(".pauseSound").style.display= "none"
    

  }

  /*AboutMe*/
   
  function aboutMe(){
    console.log("about me function is clickd ")
    audio.play();
    document.querySelector(".aboutMeBtn").style.display = 'none';
    document.querySelector(".aboutMe").innerHTML = `<div className='animatedAboutMeBox'>
    <div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div><span className='loadingClass fs-1'>Loading...</span>
   </div>`
   document.querySelector(".aboutMe").style.color = "#FF0000";
   document.querySelector(".aboutMe").style.fontSize = "2.1rem";
   setTimeout(() => {
    document.querySelector(".aboutMe").innerHTML = `<div className='animatedAboutMeBox'>
    <div class="container-fluid about">
      <div class="row myaboutmovingtext">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <!--Code is like humor. When you have to explain it, it’s bad.-->
          <!--          -->
          <h1 class="myabouth1">
            <span>Code &nbsp;</span>
            <span>is &nbsp;</span>
            <span>like &nbsp;</span>
            <span>humor. &nbsp;</span>
            <span> When &nbsp; </span>
            <span>you &nbsp; </span>
            <span>have &nbsp; </span>
            <span>to &nbsp;</span>
            <span>explain &nbsp; </span>
            <span>it, &nbsp; </span>
            <span> it’s &nbsp;</span>
            <span> bad.</span>
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center mt-3">
          <h2 class="abouth2">Certification Cleared</h2>
        </div>
      </div>
      
      
      <div class="row mt-3">
        <div class="col-md-4 text-center">
          <div class="card mycard">
            <img
              src="images/Vikram bais (2) (1).webp"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">BOOTSTRAP COURSE</h5>

              <a
                href="https://drive.google.com/u/0/uc?id=1Hvau2fVD7W2yKD0P3msaGr_SGBmc1I_h&export=download" target="_blank"
                class="btn btn-primary mycardbtn"
                >DOWNLOAD HERE</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="card mycard">
            <img
              src="images/javascript certificate (1).webp"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">JAVASCRIPT COURSE</h5>

              <a
                href="https://drive.google.com/u/0/uc?id=1-TJw1ht3Zv10nIqihjbnJ-wuMm76I56y&export=download" target="_blank"
                class="btn btn-primary mycardbtn"
                >DOWNLOAD HERE</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="card mycard">
            <img
              src="images/frontend developer through simplilearn (1).webp"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">FRONTEND DEVELOPER</h5>

              <a
                href="https://drive.google.com/u/0/uc?id=1VqT8sA7Y2jMmyCNd_ofV6vvSbLgEbtet&export=download" target="_blank"
                class="btn btn-primary mycardbtn"
                >DOWNLOAD HERE</a
              >
            </div>
          </div>
        </div>
        
          
      </div>
      <div class="row mt-3">
        
        <div class="col-md-4 text-center">
          <div class="card mycard">
            <img
              src="images/coming soon.webp"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body pt-1 pb-1">
              <h5 class="card-title">COMING SOON</h5>

              <a
                href=""
                class="btn btn-primary mycardbtn"
                >PLZ WAIT</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="card mycard">
              <img
                src="images/instagrammarketing(https___olympus1.mygreatlearning.com_course_certificate_GCPKTANS) (1).webp"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">INSTAGRAM MARKETING</h5>
  
                <a
                  href="https://drive.google.com/u/0/uc?id=1w-2XPNNcNXo6LZAZf0Bg-4AoCkZAuOg_&export=download" target="_blank"
                  class="btn btn-primary mycardbtn"
                  >DOWNLOAD HERE</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="card mycard">
              <img
                src="images/coming soon.webp"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">COMING SOON</h5>
  
                <a
                  href=""
                  class="btn btn-primary mycardbtn"
                  >PLZ WAIT</a
                >
              </div>
            </div>
          </div>
       
        
          
      </div>
      <div class="row">
        <div class="col-12 text-center mt-3">
          <h2 class="abouth2">Other Participation Certifications</h2>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        
        <div class="col-md-4 text-center">
          <div class="card mycard">
            <img
              src="images/Vikram_Bais_Hired_Certificate.webp"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">SOCIAL MEDIA MARKETING INTERNSHIP</h5>

              <a
                href="https://drive.google.com/u/0/uc?id=1_iJHOE3NgEnF8Gk9yNCyWkd3AzeiEPD0&export=download" target="_blank"
                class="btn btn-primary mycardbtn"
                >DOWNLOAD HERE</a
              >
            </div>
          </div>
        </div>
       
          <div class="col-md-4 text-center">
            <div class="card mycard">
              <img
                src="images/powerbi.webp"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">POWER BI PARTICIPATION CERTIFICATE
  
                <a
                  href="https://drive.google.com/u/0/uc?id=18JbUUcqZu1tCdkF0ZxHJ5SNDVsWM4GR0&export=download" target="_blank"
                  class="btn btn-primary mycardbtn"
                  >DOWNLOAD HERE</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="card mycard">
              <img
                src="images/4-5-13-15-2-9-1630352_ Digital Power - Participation Certificate (2).webp"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">BOOTCAMP PARTICIPATION CERTIFICATE</h5>
  
                <a
                  href="https://drive.google.com/u/0/uc?id=1_OwR-1NipvEgzYTyFbbc0BxSCbBaHLdv&export=download" target="_blank"
                  class="btn btn-primary mycardbtn"
                  >DOWNLOAD HERE</a
                >
              </div>
            </div>
          </div>
       
        
          
      </div>
    </div>
   </div>`
   

    

   
    
   
   }, 3000);
   
    

  }

  

  


  
  
  return(
    <BrowserRouter>
    <Header title="TECHNOTHAKUR..."  title2="AboutMe" title3="WorkSamples" title4="Download Resume" title5="Contact"/>
    <SoundBtn  pauseSound={pauseSound} playSound={playSound}/>
    <Routes>
      <Route path='/' element={<Home home={home} li1="HTML5" li2="CSS3" li3="JAVASCRIPT" li4="BOOTSTRAP5" li5="REACTJS" li6="WORDPRESS"/> }/>
      <Route path='/about' element={ <AboutMe aboutMe={aboutMe} title1="Welcome To The Journey..Click Here !!!" /> }/>
      <Route path='/worksamples' element={ <WorkSamples   /> }/>
      <Route path='/downloadresume' element={ <DownloadResume/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      
      
    </Routes>

    
    
    
    </BrowserRouter>
   
  
     );
  
}

export default App;
