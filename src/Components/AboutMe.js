import React from 'react'

export default function AboutMe(props) {
 
  

  return (
    <div className='aboutMe '>
      
      <button  className='aboutMeBtn' onClick={props.aboutMe}>{props.title1} </button>
    
    </div>
  )
}
