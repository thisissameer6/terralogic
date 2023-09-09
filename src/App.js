import './App.scss';
import HeroSection from './components/hero-section';
import Services from './components/services';
import Awards from './components/awards';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Services/>
      <Awards/>
      <Footer/>
    </div>
  );
}

export default App;
