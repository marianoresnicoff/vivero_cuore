import logo from '../assets/logo.jpg';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';



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
        <h3>Bienvenidos al Vivero</h3>
          <div className="row">
          {info.map(i => <Card item={i.item} name={i.nombre} price={i.precio} 
          stock={i.stock} img={i.imagen} />)}
          </div>
        </div>
            
        



      ) 
}

export default ItemListContainer;

/*


 (info) => <ItemList item={info.item} name={info.nombre} price={info.precio} 
        stock={info.stock} img={info.imagen} />


  */