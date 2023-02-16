// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import skill from './components/skills/Skills';
import info from './components/about/Info';
import Skill from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';



const  App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skill />
      <Services/>
      <Qualification />
      <Contact />
      <Work />
    </main>
    

    </>
  )
}

export default App;
