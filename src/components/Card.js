import './Card.css';
import interior1 from '../assets/interior1.jfif';
import 'bootstrap/dist/css/bootstrap.min.css'

function Card() {
  return (
      
  <div className="card">
  <img src={interior1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">My Title</h4>
    <h5>Precio</h5>
    <p className="card-text">Some quick example text.</p>
    <button>Comprar</button>
  </div>

</div>


      
  );
}

export default Card;
