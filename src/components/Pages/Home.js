import React from "react";
import './Home.css';
import './root.css';
import phone from '../../images/phone.svg';
import phoneDark from '../../images/phone-dark.svg';
import ryanCaselli from '../../images/ryan-caselli.png';

export const Home = () => {
  return (
    <>
      <section id="hero">
          <div class="hero-content">
              <div class="heroText">
                  <h1 id="home-h">Main headline, put top keyword here </h1>
                  <p>
                      Expand on the keyword with more keywords and add a list of related services that you do and include the city, state of your service area.  
                  </p>
                  <div class="buttons">
                      <a class="button-solid" href="/about.html" >
                          About Us
                      </a>
                      <a class="call-now" href="tel:555-213-9120">
                          <img class="light" decoding="async" src={phone} alt="" aria-hidden="true" width="21" height="21"></img>
                          <img class="dark" decoding="async" src={phoneDark} alt="" aria-hidden="true" width="21" height="21"></img>
                          <div class="group">
                              <span class="text">Call Now</span>
                              <span class="number">(555) 213-9120</span>
                          </div>
                      </a>
                  </div>
              </div>
              <img decoding="async" src={ryanCaselli} alt="" class="business-casual" width="" height=""></img>
          </div>
      </section>

    <section id="services" class="section">
        <div class="service">
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue.
            </p>
            <a href="/contact.html" class="button-solid">Get in Touch</a>
        </div>
        <div class="service">
            <h2>This is THE main<span> service you do</span></h2>
            <p>
                Notice how this one is bigger and darker, this is your main service you provide.
            </p>
            <a href="/contact.html" class="button-solid">Get in Touch</a>
        </div>
        <div class="service">
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue .
            </p>
            <a href="/contact.html" class="button-solid">Get in Touch</a>
        </div>
    </section>
    </>
  );
};
