import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Testutils" Home="Home" About="About" />
      
      <div className="container"><Textform heading="Enter The Text To Analyze"/>
        </div>
      
    </>
  );
}

export default App;
