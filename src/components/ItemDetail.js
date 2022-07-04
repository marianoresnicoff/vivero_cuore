import './ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function ItemDetail (props) {
  return (
   
  <div>
  <img src={props.img} className="imagen" alt="imagen"/>
  <div>
    
    <p>{props.name}</p>
    <p>${props.price}</p>
    <p>Altura: {props.heigh}</p>
    <p>Ambiente: {props.enveiroment}</p>
    <p>Riego: {props.water}</p>
    <button className='botonCompra'>Comprar</button>
  </div>
  
</div>
    
  );
}

export default ItemDetail;
