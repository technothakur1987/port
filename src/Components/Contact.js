import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactBanner"></div>
      <div className="row downRow">
        <div className="col-md-8 d-flex justify-content-center align-items-center ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58961.302662111186!2d75.70959793125002!3d22.53862270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f7f4b1f71ab9%3A0x230eea986e8674e7!2sGurukul%20colony%20kodriya!5e0!3m2!1shi!2sin!4v1663614068786!5m2!1shi!2sin" width="100%" title="googlemap" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center ">
        <form className="d-flex flex-column align-items-center" action="https://formspree.io/f/xlevjzan" method="POST">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" autoComplete="off" required/>
        <label for="email">Email Id</label>
        <input type="email" id="email" name="email" autoComplete="off" required/>
        <label for="message">Message</label>
        <textarea type="text" id="message" name="message" rows="4" cols="22" autoComplete="off" required></textarea><br/>
        <input type="submit" value="Submit"></input>

        </form>
         </div>
      </div>
    </div>
  );
}
