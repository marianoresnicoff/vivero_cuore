import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="/item/:item" element={<ItemDetailContainer />} />
      </Routes> 
    
    </div>
    </BrowserRouter>
  );
}

export default App;
/* <ItemListContainer  /> */ 
/* <ItemDetailContainer /> */