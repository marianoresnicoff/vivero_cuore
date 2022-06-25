import logo from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';

const cant = 5;

function ItemListContainer() {
  return (
    
<div className="container">
    <h3>Catalogo de Productos</h3>
    <div className="row">
        <div className="col-md-4">
        <Card stock={cant}/>
        </div>
  <     div className="col-md-4">
        <Card stock={cant}/>
        </div>
  <     div className="col-md-4">
        <Card stock={cant}/>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-4">
        <Card stock={cant}/>
        </div>
  <     div className="col-md-4">
        <Card stock={cant}/>
        </div>
  <     div className="col-md-4">
        <Card stock={cant}/>
        </div>
    </div>

</div>

      
  );
}

export default ItemListContainer;
