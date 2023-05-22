import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home.js';
import Login from "./pages/login";
import Navbar from './component/Navbar';
import Footer from './component/footer';
// import Rroutes from './routes/routes';
function App() {
  return (
<>

<Navbar />
<div className='wrapper'> 

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/home" element={<Home/>} />

<Route path="/" element={<Home/>} />
</Routes>
    
</BrowserRouter>

</div>
<Footer/>


</>
   
  );
}

export default App;
