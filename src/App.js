import './App.css';
import Dashboard from './components/Dashboard';
import Editdata from './components/Editdata';
import Edituser from './components/Edituser';
import Header from './components/Header';
import Home from './components/Home';
import  {Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/edit' element={<Edituser/>}/>
      <Route path='/print' element={<Editdata/>}/>
    </Routes>
    </>
  );
}

export default App;
