
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddBlog from './Component/AddBlog';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
         <Route path='/addblog' element={<AddBlog/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
