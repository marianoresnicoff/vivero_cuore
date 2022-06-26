import './Card.css';
import interior1 from '../assets/interior1.jfif';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contador from './Contador';
import CartWidget from './CartWidget';
/*import hoya1 from '../assets/imagenes/interior/hoya/hoya1.jpg';*/

function Card ({name, price, stock, image}) {
  return (
      
  <div className="card">
  <img src={interior1} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <button className='botonCompra'>Ver detalle</button>
    <h5>{name}</h5>
    <h5>${price}</h5>
    <p className="card-text">{`${stock} U disponibles`}</p>
    <button className='botonContador'><Contador stock={stock} /></button>
    <hr></hr>
    <button className='botonCompra'>Comprar<CartWidget /></button>
   
  </div>
  
</div>
    
  );
}

export default Card;
