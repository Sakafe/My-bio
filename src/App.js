import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';
import About from './Component/About/About';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
