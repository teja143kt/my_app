
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Resister from './components/Resister';
import Card from './components/Card';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function App() {
  return (

    <div className="App" style={{ backgroundColor: 'rgba(160, 244, 244, 0.425)', }} >
      <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Education />
              <Skills />
              <Card />
              <Resister />
            </>
          }
          />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resister' element={<Resister />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
