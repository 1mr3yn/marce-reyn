import Timeline from './components/sections/timeline'
import Gifts from './components/sections/gifts'
import Unplugged from './components/sections/unplugged'
import CountdownTimer from './components/sections/countdown'
import Rsvp from './components/sections/rsvp'
import HeroSunflower from './components/sections/hero'
import Details from './components/sections/details'

function App() {
   const weddingDate = '2024-12-20T13:00:00';

  return (
    <>
      <section id="hero-sunflower" className="scroll-animation"><HeroSunflower /></section>
      <section id="countdown" className="scroll-animation"><CountdownTimer targetDate={weddingDate} /></section>
      <section id="timeline" className="scroll-animation"><Timeline /></section>
     <section id="details" className="scroll-animation"><Details /></section>
       {/* <section id="gifts" className="scroll-animation"><Gifts /></section>
      <section id="rsvp" className="scroll-animation"><Rsvp /></section>
      <section id="unplugged" className="scroll-animation"><Unplugged /></section> */}
    </>
  )
}

export default App
