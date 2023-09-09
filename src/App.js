import './App.scss';
import HeroSection from './components/hero-section';
import Services from './components/services';
import Awards from './components/awards';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Services/>
      <Awards/>
      <Footer/>
    </div>
  );
}

export default App;
