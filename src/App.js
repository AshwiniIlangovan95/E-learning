import Header from './components/Header1';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';

import Princing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Courses from './components/Courses';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/> 

      {/* <Switch>
        <Route path='/' exact component={Home}/>
          
        
      </Switch> */}
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Courses' element={<Courses/>} />
          <Route exact path='/Pricing' element={<Princing/>} />
          <Route exact path='/Team' element={<Team/>} />
          <Route exact path='/Contact' element={<Contact/>} />
          
          {/* <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
