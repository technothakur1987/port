import React from 'react'

export default function DownloadResume() {
  return (
    <div className='resumeDownload'>
      <div className="video-container mb-1" id="home">
        <video autoPlay loop muted poster="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.jpg?noresize">
         
          <source src="videos/video3.webm" type="video/webm" />
          
        </video>

        <div className="caption ">
          
          <a  className="resumeText" href='https://drive.google.com/u/0/uc?id=1QC4K_-4UQrKsr2qhVfQmVuHy8PBtBSKg&export=download' rel="noreferrer" target="_blank">To Check the Fire Inside Me,Click Here!!!</a>
        </div>
      </div>
     
     

    </div>
  )
}
