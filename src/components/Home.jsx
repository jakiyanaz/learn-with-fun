import React from 'react'
import { Link } from "react-router-dom";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs"
import { AiTwotoneHeart, AiFillStar } from "react-icons/ai"
import { SiSololearn } from "react-icons/si"
import vid_quotes from '../assets/videos/vidquotes.mp4'
import vid_facts from '../assets/videos/vidfacts.mp4'
import vid_geocoding from '../assets/videos/vidgeocoding.mp4'
import vid_riddles from '../assets/videos/vidriddles.mp4'
import vid_trivia from '../assets/videos/vidtrivia.mp4'
import vid_historicalevents from '../assets/videos/vidhistoricalevents.mp4'
import vid_historicalfigures from '../assets/videos/vidhistoricalfigures.mp4'
import vid_planeta from '../assets/videos/vidplanets.mp4'
import vid_thesaurus from '../assets/videos/vidthesaurus.mp4'

const Home = () => {
  const generalInfo = {
    fontSize: '24px',
    color: 'red',
  };
  const visitApp = {
    padding: '0.5rem 2rem',
    backgroundColor: '#cb6ce6',
    color: 'white',
    borderRadius: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    zIndex: 2,
  };

  return (
    <div id='homepage' className='abc'>
      <section id='generalinfo' className='applistsec border border-3 flex flex-col items-center gap-2 mb-8 bg-orange-100 shadow-lg shadow-fuchsia-300'>
        <h1 className='font-bold text-2xl underline underline-offset-4'>Learn With Fun</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap:3}}>
          <span><SiSololearn style={generalInfo} /></span>
          <span><SiSololearn style={generalInfo} /></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap:3}}>
        <h3 className='font-semibold text-xl'>This is a combination of 9 exciting apps</h3>
        </div>
        <span>So have some Knowledge with some Fun</span>
        <div style={{ display: 'flex', alignItems: 'center', gap:2}}>
          <span><BsEmojiHeartEyes style={generalInfo} /></span>
          <span><BsEmojiHeartEyes style={generalInfo} /></span>
        </div>
      </section>
      
      <section id='quotessection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="quotesdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
          <div id="quotesvid" className='basis-1/2'>
            <video autoPlay muted loop src={vid_quotes}></video>
          </div>
          <div id="quotesdesc" className='appdesc basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>QUOTES</h1>
            <p className='descpara'>"Quotes are like little nuggets of wisdom 📚✨ that can spark inspiration, motivation💡and introspection in just a few words🌟📖"</p>
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

      <section id='factssection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="factsdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
        <div id="factsdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>FACTS</h1>
            <p className='descpara'>🧠🤓 Let's embark on a journey of discovery! Learning facts not only broadens our knowledge but also fuels our curiosity about the world 🌍 keep the quest for knowledge alive!💡</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
          <div id="factsvid" className='basis-1/2 reverseorder'>
            <video autoPlay muted loop src={vid_facts}></video>
          </div>
        </div>
        <div>
          <Link to='/facts' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='geocodingsection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="geocodingdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
        <div id="geocodingvid" className='basis-1/2'>
            <video autoPlay muted loop src={vid_geocoding}></video>
        </div>
        <div id="geocodingdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>GEOLOCATION</h1>
            <p className='descpara'>Find out number of cities🏙️ of same name in any country with their latitudes🌍 and longitudes🌐 </p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
        </div>
        <div>
          <Link to='/geocoding' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='riddlessection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="riddlesdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
        <div id="riddlesdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>RIDDLES</h1>
            <p className='descpara'>"Riddles are like mental adventures, a journey through the enigmatic landscapes of our imagination! 🧩🤔 </p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
          <div id="riddlesvid" className='basis-1/2 reverseorder'>
            <video autoPlay muted loop src={vid_riddles}></video>
          </div>
        </div>
        <div>
          <Link to='/riddles' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='triviasection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="triviasdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
          <div id="triviavid" className='basis-1/2'>
            <video autoPlay muted loop src={vid_trivia}></video>
          </div>
          <div id="triviadesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>TRIVIA</h1>
            <p className='descpara'>🧠 Trivia time! Here's a brain teaser for you: 'Who was 'The Midnight Rider'? 🤔 Think you know the answer</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
        </div>
        <div>
          <Link to='/trivia' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='historicaleventssection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="historicaleventsdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
        <div id="historicaleventsdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>HISTORICAL EVENTS</h1>
            <p className='descpara'>🌍✨ Dive into the annals of history and discover the stories that shaped our world it's about understanding our present and shaping our future🔍</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
          <div id="historicaleventsvid" className='basis-1/2 reverseorder'>
            <video autoPlay muted loop src={vid_historicalevents}></video>
          </div>
        </div>
        <div>
          <Link to='/historical-events' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='historicalfiguressection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="historicalfiguresdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
          <div id="historicalfiguresvid" className='basis-1/2'>
            <video autoPlay muted loop src={vid_historicalfigures}></video>
          </div>
          <div id="historicalfiguresdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>HISTORICAL FIGURES</h1>
            <p className='descpara'>🕰️🌟 Exploring the lives of historical figures is like meeting the heroes of our past. Let's know our heros💡📜</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
        </div>
        <div>
          <Link to='/historical-figures' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      <section id='planetssection' className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="planetsdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
        <div id="planetsdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>PLANETS</h1>
            <p className='descpara'>Learning about planets 🌌🔭 isn't just about astronomy; it's about expanding our horizons and fueling our curiosity🚀🌠</p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
          <div id="planetsvid" className='basis-1/2 reverseorder'>
            <video autoPlay muted loop src={vid_planeta}></video>
          </div>
        </div>
        <div>
          <Link to='/planets' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

      

      <section id="thesaurussection" className='applistsec border border-3 flex flex-col items-center gap-6 mb-5 bg-yellow-100 shadow-lg shadow-fuchsia-300'>
        <div id="thesaurusdiv" className='appdiv media flex flex-row justify-between items-center gap-10'>
          <div id="thesaurusvid" className='basis-1/2 reverseorder'>
            <video autoPlay muted loop src={vid_thesaurus}></video>
          </div>
          <div id="thesaurusdesc" className='basis-1/2 flex flex-col items-center gap-3'>
            <h1 className='descpara-heading'>THESAURUS</h1>
            <p className='descpara'>📚💬Looking to expand your vocabulary? Enter a word and unlock a list of synonyms and antonyms!🔄 so explore and improve💡 </p>
            <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', gap:2}}> 
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
              <span><AiFillStar style={generalInfo} /></span>
            </div>
          </div>
        </div>
        <div>
          <Link to='/thesaurus' style={visitApp} className='visitApp'>Visit App</Link>
        </div>
      </section>

    </div>
  )
}

export default Home