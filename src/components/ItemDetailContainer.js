import './ItemDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

  const [informacion, SetProductos] = useState([])   
  console.log(useParams()); 
  const { iditem } = useParams;
  
  
  useEffect(() => {

      setTimeout(
      () =>{
      fetch('productos.json')
            .then((resp) => resp.json())
            .then((productos)  => SetProductos(productos)) 
      },1000
  )
  }, [])

  console.log(informacion);

      return (
    
<div className="container">
   
    <h3>Detalle del Producto</h3>
      <div className="row">
      {informacion.map(i => <ItemDetail name={i.nombre} price={i.precio} 
      img={i.imagen} heigh={i.altura} enveiroment={i.ambiente} water={i.riego} />)}
      </div>
    
</div>

      
  );
}

export default ItemDetailContainer;