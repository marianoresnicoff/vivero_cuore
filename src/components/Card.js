import React from 'react';
import './Card.css';
import interior1 from '../assets/interior1.jfif';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contador from './Contador';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
/*import hoya1 from '../assets/hoya1.jpg';*/

function Card (props) {
  return (
   
  <div className="card">
  <img src={props.img} className="card-img-top" alt="imagen"/>
  <div className="card-body">
    <Link to={`/item/${props.item}`}>
    <button className='botonCompra'>Ver detalle</button>
    </Link>
    <h5>{props.name}</h5>
    <h5>${props.price}</h5>
    <p className="card-text">{`${props.stock} U disponibles`}</p>
    <button className='botonContador'><Contador stock={props.stock} /></button>
    <hr></hr>
    <button className='botonCompra'>Comprar<CartWidget /></button>
  </div>
  
</div>
    
  );
}

export default Card;
