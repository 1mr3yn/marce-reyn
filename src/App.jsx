import Timeline from './components/sections/timeline'
import CountdownTimer from './components/sections/countdown'
import HeroSunflower from './components/sections/hero'
import Details from './components/sections/details'
import Footer from './components/sections/footer'

function App() {
   const weddingDate = '2024-12-20T13:00:00';

  return (
    <>
      <section id="hero-sunflower" className="scroll-animation"><HeroSunflower /></section>
      <section id="countdown" className="scroll-animation"><CountdownTimer targetDate={weddingDate} /></section>
      <section id="timeline" className="scroll-animation"><Timeline /></section>
      <section id="details" className="scroll-animation"><Details /></section>
      <section id="footer" className=""><Footer /></section>
    </>
  )
}

export default App
