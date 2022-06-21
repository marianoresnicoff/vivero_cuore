import './CartWidget.css';
import logo from '../assets/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
/*import 'bootstrap/dist/css/bootstrap.min.css'*/

function CartWidget() {
  return (
    
      <header className = "CartWidget">
          <FontAwesomeIcon icon={faCartShopping}/>   
      </header>
   
  );
}

export default CartWidget;
