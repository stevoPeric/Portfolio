import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.js'
import Home from './components/Home/Home.js';
import About from './components/About/About.js';

function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
  </Route>
</Routes>
    </>
  );
}

export default App;
