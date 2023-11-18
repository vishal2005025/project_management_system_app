import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Hey, valued community members!</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>PROJECT HUB</h1>
            <span>ONLINE POJECT MANAGEMENT PLATFORM</span>
            <p>Stay informed about the latest trends in market,  and resources to enhance your project safe and up to date.</p>

            <a href='https://www.facebook.com/' target='_blank'><i className='fab fa-facebook-f icon'></i></a>
            <a href='https://twitter.com/' target='_blank'><i className='fab fa-twitter icon'></i></a>
            <a href='https://www.instagram.com/' target='_blank'><i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                AKGEC Ghaziabad, UP
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +9520454622
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                vishalmalyan2005@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Vishal Malyan
        </p>
      </div>
    </>
  )
}

export default Footer
