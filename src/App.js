import './App.css';
import Header from './components/Header';
import hero from './assets/hero.png';
import Container from './components/Container';
import MyButton from './components/MyButton';
import AboutUs from './components/AboutUs';
import GameHalls from './components/GameHalls';
import WhatToPlay from './components/WhatToPlay';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <img src={hero} alt='' className='heroBanner'/>
      <Container>
        <Header/>
        <div className='hero'>
          <h1 className='heroTitle'>
            Иследуй<br/>виртуальную<br/>реальность
          </h1>
          <h3 className='heroDescription'>
            Виртуальная реальностью может быть веселой, но это также может быть очень страшным. Проведи свое время незабываемо в VR-клубе
          </h3>  
          <div className='heroButtons'>
            <MyButton text="Выбрать Игру"/>
            <button className='heroButton'>Наши цены</button>
          </div>
        </div>
        <AboutUs/>
        <GameHalls/>
        <WhatToPlay/>
        <Contacts/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
