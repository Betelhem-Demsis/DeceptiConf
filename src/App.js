import './App.css';
import Header from './Header';
import Hero from './Hero';
import Speaker from './Speaker';
import Schedule from './Schedule';
import Sponsor from './Sponsor';
import Newsettler from './Newsettler';
import Footer from './Footer';
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
