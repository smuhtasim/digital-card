
import './App.css'
import picture from "./assets/Al Muhtasim Srijon.jpg"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <img src={picture} alt='profile-picture' height='300' width='320'/>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
