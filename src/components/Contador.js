import { useState } from 'react';
import './Contador.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2';
import { icon } from '@fortawesome/fontawesome-svg-core';

function Contador({stock}) {
    const [num, setNum] = useState(0);
  
  const sumar = () => {
      if (num < stock) setNum(num+1)
      else{
            Swal.fire({
                    title: 'Atencion!',
                    text: 'No tenemos mas stock',
                    icon: 'warning',
                    timer:2000

            })


      }
           
  }

  const restar = () => {
    if (num > 0) setNum(num-1)
  }
  
    return (
    
    <>
    <div className="containerContador">
    <div className="row">
        <div className="col-md-4">
            <button className='botonContador' onClick={restar}>-</button>
        </div>
        
        <div className="col-md-4">
        <h5>{num}</h5>
        </div>
        
        <div className="col-md-4">
        <button className='botonContador' onClick={sumar}>+</button> 
        </div>
    </div>

    </div>
    </>

  );
}

export default Contador;
