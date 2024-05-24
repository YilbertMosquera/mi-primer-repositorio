import './App.css';
import Home from './pages/home';
import Recipes from './pages/recipes';
import Contact from './pages/contact';
import Ours from './pages/ours';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Ours' element={<Ours/>}/>
        <Route path='/Recipies' element={<Recipes/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>      
    </>
  );
}

export default App;
