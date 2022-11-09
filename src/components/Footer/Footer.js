import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialPinterest, TiSocialLinkedin } from "react-icons/ti"

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      {/* <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">Email</a>
      </section> */}
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
          Near by destinations
          </section>
          <section className="footer-info__returns">
            Kiambu
            <br />
            Nakuru
            <br />
            Mombasa
            <br />
            Thika
            <br />
            </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            Contact Us
            <br />
            Apartment.info@gmail.com
            <br />
            phone.no +254712345678
          </section>
          <section className="footer-info__terms">
          Nairibi City, 202000, Kenya
            <br />
            © Airb&b 2022 Copyright:
          </section>
        </section>
        <section className="footer-info-right">
        <section className="footer-social-media">
          Social-Media
          </section>
          <section className="Style.footer__social">
          <button>
            <TiSocialFacebook/> Facebook
            </button>
            <br/>
            <button>
            <TiSocialInstagram/> Instagram
            </button>
            <br/>
            <button>
            <TiSocialLinkedin/> Linkendin
            </button>
            <br/>
            <button>
            <TiSocialTwitter/> Twitter
            </button>
            <br/>
            
            {/* <br />
            {/* Apartment page
            <br />
          About Page
          <br />
          Contact page
          <br /> */} 
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;



