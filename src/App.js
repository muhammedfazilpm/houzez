import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'flowbite';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
import Contactus from './pages/Contactus';
import Gettingstarted from './pages/Gettingstarted';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/getingstarted' element={<Gettingstarted/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
