import React from 'react'

const Section = () => {
  return (
    <section id='quotessection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="quotesdiv" className='appdiv media flex flex-row justify-between items-start gap-10'>
          <div id="quotesvid" className='basis-1/2'>
            <video autoPlay muted loop src={vid_quotes}></video>
          </div>
          <div id="quotesdesc" className='basis-1/2 flex flex-col items-start gap-3'>
            <p>"Quotes are like little nuggets of wisdom that can spark inspiration, motivation, and introspection in just a few words."</p>
            <p>"In a world filled with noise, quotes are the quiet whispers of wisdom that can guide us through life's challenges."</p>
            <p>"Reading quotes is like taking a journey into the minds of great thinkers, writers, and leaders."</p>
            <p>"Quotes can encapsulate complex ideas into simple words, making them accessible to all."</p>
            <p>"Quotes have the power to uplift our spirits, remind us of our strengths, and provide solace in difficult times."</p>
            <p>"Exploring quotes is like having a conversation with the greatest minds in history, learning from their experiences."</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
        </div>
        <div>
          <Link to='/quotes' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
    </section>
  )
}

export default Section