import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'flowbite';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
