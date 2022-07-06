import './NavBar.css';
import logo from '../assets/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className = "navbar">
          <img src={logo} className = "logo" />
          <button className='botonNavbar'><Link to='/'>Home</Link></button>
          <button className='botonNavbar'><Link to='/pages/Products'>Productos</Link></button>
          <button className='botonNavbar'><Link to='/pages/FAQ'>FAQ</Link></button>
          <button className='botonNavbar'><Link to='/pages/Contactos'>Contactos</Link></button>
          <CartWidget />
          
      </header>    
      
  );
}
/*<FontAwesomeIcon className='carro' icon={faCartShopping}/>   */
export default NavBar;
