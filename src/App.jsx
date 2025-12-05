import './App.css'
import Header from './components/Header'
import Navbar from './components/navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import MiniProjects from './components/Mini projects'
import Internships from './components/Internship'
import AboutMe from './components/About me'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Internships/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
