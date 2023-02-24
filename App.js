import "./App.css"
import Navbar from "./components/navbar";
import Home from "./Pages/home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/Menu' exact element={<Menu />}/>
        <Route path='/About' exact element={<About />}/>
        <Route path='/Contact' exact element={<Contact />}/>
        </Routes>
        <Footer/>
      </Router> 
 
    </div>
  )
}

export default App;
