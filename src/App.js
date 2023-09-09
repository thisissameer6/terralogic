import './App.scss';
import HeroSection from './components/hero-section';
import Services from './components/services';
import Awards from './components/awards';
import Footer from './components/footer';
import Header from './components/header';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Services/>
      <Awards/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
