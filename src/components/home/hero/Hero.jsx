import React from 'react'
import "./hero.css"
import Title from "../../common/title/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
           <Title subtitle='WELCOME TO PROJECT MANAGEMENT APP' title="Best Online Manager  "/>
            <p>In the vast realm of online poject management system, a world of knowledge unfolds at your fingertips. </p>
             <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
