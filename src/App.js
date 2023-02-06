import Header from './components/Header1';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Courses from './components/All courses/course_home';
import About from './components/About/about';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Signup from './components/signup/signup';
import Cart from './components/cart/cart';

function App() {

  const [courses, setCourses] = useState([]);

  return (
    <div className="App">
      <Router>
      <Header courses={courses}/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Courses' element={<Courses courses={courses} setCourses={setCourses}/>} />
          <Route exact path='/Team' element={<Team/>} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/cart' element={<Cart cartItems={courses}/>} />
        </Routes>
      </Router>
      {/* <About/> */}
      
    </div>
  );
}

export default App;
