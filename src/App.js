import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
// import Footer from './Component/Footer/Footer';
// import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';
import About from './Component/About/About';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
