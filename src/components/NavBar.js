import './NavBar.css';
import logo from '../assets/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

function NavBar() {
  return (
    
      <header className = "navbar">
          <img src={logo} className = "logo"></img>
          <button>Productos</button>
          <button>Servicios</button>
          <button>FAQ</button>
          <button>Contactos</button>
          <FontAwesomeIcon className='carro' icon={faCartShopping}/>   
      </header>
    


   
  );
}

export default NavBar;
