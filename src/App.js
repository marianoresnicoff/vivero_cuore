import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />  
      
      
    </div>
  );
}

export default App;