import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.js'
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
</Routes>
    </>
  );
}

export default App;
