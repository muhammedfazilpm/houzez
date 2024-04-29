import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'flowbite';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/blog' element={<Blog/>}/>


    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
