import logo from '../assets/logo.jpg';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import { useEffect, useState } from 'react';



function ItemListContainer() {

  const [info, SetInfo] = useState([])    
  
  useEffect(() => {

      setTimeout(
      () =>{
      fetch('productos.json')
            .then((resp) => resp.json())
            .then((productos)  => SetInfo(productos)) 
      },1000
  )
  }, [])
  
  console.log(info)

      return (
    
<div className="container">
   
    <h3>Catalogo de Productos</h3>
      <div className="row">
      {info.map(i => <Card name={i.nombre} price={i.precio} stock={i.stock} image={i.imagen}/>)}
      </div>
    
</div>

      
  );
}

export default ItemListContainer;
