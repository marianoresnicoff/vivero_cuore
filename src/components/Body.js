/*import './Body.css';*/
import logo from '../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';

function Body() {
  return (
    

<div className="container">
    <h3>Catalogo de Productos</h3>
    <div className="row">
        <div className="col-md-4">
        <Card />
        </div>
  <     div className="col-md-4">
        <Card />
        </div>
  <     div className="col-md-4">
        <Card />
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-4">
        <Card />
        </div>
  <     div className="col-md-4">
        <Card />
        </div>
  <     div className="col-md-4">
        <Card />
        </div>
    </div>

</div>

      
  );
}

export default Body;
