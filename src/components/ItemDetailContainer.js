import './ItemDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';

  
function ItemDetailContainer(){
    const [info, SetInfo] = useState([]) 

    useEffect (() => {
        setTimeout(() => {
            fetch("productos.json")
            .then((response) => response.json())
            .then((data)  => SetInfo(data)) 
      }, 1000)
    
    }, [])

    //console.log(data)      
     console.log(info)  

return (
    
<div className="container">
   
    <h3>Detalle del Producto</h3>
   
</div>


  );
}

export default ItemDetailContainer;

/*
{cardsFetch.map(i => <ItemDetail name={i.nombre} price={i.precio} 
    img={i.imagen} heigh={i.altura} enveiroment={i.ambiente} water={i.riego} />)}

    */