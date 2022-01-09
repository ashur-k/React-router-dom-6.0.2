import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Pricing from './routes/Pricing';
import FAQ from './routes/FAQ';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
