import React, {useState} from '../../node_modules/react';
import '../assets/css/App.css';
import '../assets/css/index.css';

// HOOKS //
function Contador(props){
    // eslint-disable-next-line no-undef
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>Conteo: {contador}</p>
            <button onClick = {() => setContador(contador + 1)}>Aumentar</button>
        </div>
    )

}

export default Contador;