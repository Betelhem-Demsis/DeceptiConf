import './css/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Speaker from './components/Speaker';
import Schedule from './components/Schedule';
import Sponsor from './components/Sponsor';
import Newsettler from './components/Newsettler';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
       <Hero/> 
       <Speaker/>
       <Schedule/>
       <Sponsor/>
       <Newsettler/>
       <Footer/>
    </div>
  );
}

export default App;
