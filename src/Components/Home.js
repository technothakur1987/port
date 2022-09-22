import React from 'react'


export default function Home(props) {
   
    
    return (
        <div className='home' onLoad={props.home}>

            <div className="container-fluid mt-3 ">
                <div className="row myrow">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <ul className="mylist">
                            <li className="li1 fs-2">{props.li1}</li>
                            <li className="li2 fs-2">{props.li2}</li>
                            <li className="li3 fs-2">{props.li3}</li>
                        </ul>
                    </div>
                    <div className="col-4 Mqimage">
                        <img src="images/vikramimage.jpg" alt='myprofileimage' className="img-fluid  myimground " />
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <ul className="mylist">
                            <li className="li4 fs-2">{props.li4}</li>
                            <li className="li5 fs-2">{props.li5}</li>
                            <li className="li6 fs-2">{props.li6}</li>
                        </ul>
                    </div>
                </div>
                <div className="row homeAnimatedText mt-3 ">
                    <h1 className='text-center text-primary '>Hi,This is Vikram Bais,</h1>
                    

                </div>
                
               
                
            </div>


        </div>



    )
}
