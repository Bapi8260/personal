
import './App.css';
import First1 from './component/First1'
import Nav from './component/Nav'
import Skill from './component/Skill'
import Project from './component/Project'
import Service from './component/Service'
import Contact from './component/Contact'
import Footer from './component/Footer'
import { useState } from 'react';
function App() {
  const[data,setData]=useState(0);
  return (
    <div className="App">
     <Nav setdata={setData} data={data}/>
     <First1 data={data}/>
     <Skill/>
     <Project/>
     <Service/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
