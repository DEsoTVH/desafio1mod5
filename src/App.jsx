import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Home from "./assets/views/Home"
import NotFound from './assets/views/NotFound'
import Contact from './assets/views/Contact'
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
