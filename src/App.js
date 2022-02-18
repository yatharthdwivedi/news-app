import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
          <Route path="/"  element={<News pageSize={6} country="in" category="general"/>} />
          <Route path="/about"  element={<About/>} />

          {/* catagory */}
          <Route exact path="/general" element={<News key="general"  pageSize={6} country="in" category="general"/>} />
          <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>} />
          <Route exact path="/science"element={<News key="scince" pageSize={6} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>} />
          

      </Routes> 
          
    
    
    </>
  );
}

export default App;
