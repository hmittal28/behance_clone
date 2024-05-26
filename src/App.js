import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Filters from './components/Filter';
import BehanceItems from './components/Behance_grid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header1/>      
      <Header2/>
      <Filters/>
      <BehanceItems/>
      <Footer/>
    </div>
  );
}

export default App;
