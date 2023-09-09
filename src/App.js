import './App.scss';
import HeroSection from './components/hero-section';
import Services from './components/services';
import Awards from './components/awards';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Services/>
      <Awards/>
    </div>
  );
}

export default App;
