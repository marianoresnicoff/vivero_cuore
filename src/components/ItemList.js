import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import { useEffect, useState } from 'react';

function ItemList(props) {

  const [info, SetInfo] = useState([])    
  
  
      return (
    
<div className="container">
   
    <h3>Catalogo de Productos</h3>
      <div className="row">
      {info.map(props => <Card item={props.item} name={props.nombre} price={props.precio} 
      stock={props.stock} img={props.imagen} />)}
      </div>
    
</div>

      
  );
}

export default ItemList;
