import React from 'react'
import Back from '../common/back/Back'
import TeamCard from "./TeamCard"
import "./team.css"
import Header from '../common/heading/Header'

const Team = () => {
  return (
    <>
      <Header />
      
      <Back title="Team" />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default Team
