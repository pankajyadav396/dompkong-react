import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mintsec } from './components/Mintsec';
import Faqsec from './components/Faqsec';
import Teamsec from './components/Teamsec';
import Partners from './components/Partners';
import Utilitie from './components/Utilitie';
import Kong from './components/Kong';
import Roadmapsec from './components/Roadmapsec';
import Aboutsec from './components/Aboutsec';
function App() {
  return (
    <>
      <Header />
      <Aboutsec />
      <Utilitie />
      <Kong />
      <Mintsec />
      <Roadmapsec />
      <Partners />
      <Teamsec />
      <Faqsec />
    </>
  );
}

export default App;
