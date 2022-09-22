import React from 'react'

export default function SoundBtn(props) {
  return (
    <div>
        <div className='soundbtn playSound' onClick={props.playSound}>Enjoy With Music</div>
        <div className='soundbtn pauseSound' onClick={props.pauseSound}>Close the Music</div>
    </div>
  )
}
