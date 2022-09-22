import React from 'react'




export default function WorkSamples() {




  return (
    <div className='border'>
      <div className="video-container mb-1" id="home">
        <video autoPlay loop muted poster="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.jpg?noresize">
          <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.mp4" type="video/mp4" />
          <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.webm" type="video/webm" />
          <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.ogv" type="video/ogg" />
        </video>

        <div className="caption">
          <h1  >FRONTEND </h1>
          <h1 className='ps-5 mqh1 ' > DEVELOPER</h1>
          <h3 className='ps-5 mqh3  '>  I Create Contents For <strong>WEB...</strong></h3>
          <h3 className='ps-5 mqh3'>  <strong>UI/UX</strong> designs</h3>
          <h3 className='ps-5 mqh3'>  <strong>SEO</strong>--Search Engine Optimization</h3>
          <h3 className='ps-5 mqh3'>   Digital Marketing</h3>
          <a href="#bootstrap5Projects"><span className='ms-5 mt-4 btn text-white border-light wsBnt1'>Bootstrp5 Projects</span></a>
          <a href="#frontendProjects"><span className=' btn mt-4 text-white border-light wsBnt2'>FrontEnd Projects</span></a>
          <a href="#appsGames"><span className=' btn mt-4 text-white border-light wsBnt3'>Some Apps/games</span></a>

        </div>
      </div>
      <div className="row" id="bootstrap5Projects">
        <div className="col-12 ">
          <video autoPlay loop muted poster="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/web-design/web-design.jpg?noresize">
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/web-design/web-design.mp4" type="video/mp4" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/web-design/web-design.webm" type="video/webm" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/web-design/web-design.ogv" type="video/ogg" />
          </video>
          <div className="captionBootstrap5Projects">
            <strong> Web Designer</strong>

            <ul className="ull">
              <li className="list-unstyled fs-3">Made Responsive with Embedded Bootstrap5</li>
              <li className="list-unstyled fs-3">Frontend Development</li>
              <li className="list-unstyled fs-3">Ui/Ux Design</li>
              <li className="list-unstyled fs-3">Support & Maintenance</li>
              <a href='#bootstrap5Work'> <li className="list-unstyled fs-3 webDeveloperBtn " >Browse the Projects</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className="row" id="frontendProjects">
        <div className="col-12 ">
          <video autoPlay loop muted poster="https://www.intechnic.com/hubfs/intechnic_2017/assets/videos/ux/ux.jpg?noresize">
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/ux/ux.mp4" type="video/mp4" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/ux/ux.webm" type="video/webm" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/ux/ux.ogv" type="video/ogg" />
          </video>
          <div className="captionfrontendProjects">
            <strong>FrontEnd Projects</strong>

            <ul>
              <li className="list-unstyled fs-2">Wordpress Projects</li>
              <li className="list-unstyled fs-2">Feels like a Pro in Wordpress Development</li>
              <li className="list-unstyled fs-2">Ui/Ux Designs</li>
              <li className="list-unstyled fs-2">Support & Maintenance</li>
              <a href='#frontendWork'>  <li className="list-unstyled fs-3 frontenDeveloperBtn">Explore the Projects</li></a>
            </ul>
          </div>
        </div>

      </div>
      <div className="row" id="appsGames">
        <div className="col-12 ">
          <video autoPlay loop muted poster="https://www.intechnic.com/hubfs/intechnic_2017/assets/videos/marketing/marketing.jpg?noresize">
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/marketing/marketing.mp4" type="video/mp4" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/marketing/marketing.webm" type="video/webm" />
            <source src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/marketing/marketing.ogv" type="video/ogg" />
          </video>
          <div className="captionappsGames">
            <strong> Some Apps/Games</strong>

            <ul>
              <li className="list-unstyled fs-3">Vanilla Javascript</li>
              <li className="list-unstyled fs-3">Logic Development</li>
              <li className="list-unstyled fs-3 ">Some Include React Js FrameWork</li>

              <a href='#appsGamesWork'>   <li className="list-unstyled fs-3 appsGamesBtn">Open in Desktop Only</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid text-center' id="bootstrap5Work" >
        <h1 className="text-success mt-1 mb-1 fw-bolder">My Recent Works </h1>
        <h4 className="text-success mt-2 mb-3">HERE ARE A FEW PAST DESIGN PROJECTS I'VE WORKED ON. WANT TO SEE MORE ???  </h4><a href="mailto:technothakur1987@gmail.com" className="fs-3">Send email</a>
        <div className="container pt-4 pb-4">
          <div className="row mt-2 mb-3 d-flex justify-content-evenly align-items-center ">

                <div className="col-3 border text-center website1" >
                      <strong>sample portfolio website</strong> 
                     <a  className=" border  " href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>
                <div className="col-3 border text-center website2" >
                      <strong> Premium Colledge Website</strong> 
                     <a href='https://technothakur1987.github.io/ColledgeWebsite/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>
                <div className="col-3 border text-center website3" >
                      <strong>Online Food Delivery Website</strong> 
                     <a href='https://technothakur1987.github.io/foodDeliveryWebsiteNew/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>

          </div>
          <div className="row mt-3 mb-2 d-flex justify-content-evenly align-items-center ">

          <div className="col-3 border text-center website1" >
                      <strong>sample portfolio website</strong> 
                     <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>
                <div className="col-3 border text-center website1" >
                      <strong>sample portfolio website</strong> 
                     <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>
                <div className="col-3 border text-center website1" >
                      <strong>sample portfolio website</strong> 
                     <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
                </div>

          </div>
          <div className="row mt-3 mb-2 d-flex justify-content-evenly align-items-center ">

<div className="col-3 border text-center website1" >
            <strong>sample portfolio website</strong> 
           <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
      </div>
      <div className="col-3 border text-center website2" >
            <strong>sample portfolio website</strong> 
           <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
      </div>
      <div className="col-3 border text-center website1" >
            <strong>sample portfolio website</strong> 
           <a href='https://technothakur1987.github.io/portfolio/' target="_blank" rel="noreferrer"> Visit the Site</a>
      </div>

</div>


        </div>


      </div>
      <div className='container-fluid text-center' id="frontendWork">
        <h1 className="text-primary">Some Frontend/Wordpress Work </h1>
        
        <div className="frtWork ">
          <h1 className="text-primary "><a className="text-white fw-bold bg-transparent " href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Visit the Site</a></h1>
       


        </div>

      </div>
      <div className='container-fluid text-center' id="appsGamesWork">
        <h1 className="text-warning">Some Apps and Games </h1>
        <h4 className="text-warning">Mostly Suitable for Desktop Versions Only</h4>
        <div className='row mt-5'>
          <div className='col-md-1  app1 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app2 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app3 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app4 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app5 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app6 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app7 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app8 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app9 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
          <div className='col-md-1 app10 '><a className="text-white" href='https://stgeorgecakes.com.au/' target="_blank" rel="noreferrer"> Snake Game</a></div>
        </div>
        <hr className='bg-danger mt-5'></hr>
        <hr className='bg-primary mt-5'></hr>
        <hr className='bg-warning mt-5'></hr>


      </div>








      
    </div>
    
  )
}
