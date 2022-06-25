import './Card.css';
import interior1 from '../assets/interior1.jfif';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contador from './Contador';
import CartWidget from './CartWidget';

function Card ({stock}) {
  return (
      
  <div className="card">
  <img src={interior1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">My Title</h5>
    <h5>Precio</h5>
    <p className="card-text">{`${stock} U disponibles`}</p>
    <button className='botonContador'><Contador stock={stock} /></button>
    <hr></hr>
    <button className='botonCompra'>Comprar<CartWidget /></button>

    
  </div>
  
</div>


      
  );
}

export default Card;
