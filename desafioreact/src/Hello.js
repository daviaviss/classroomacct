import react, {useState} from 'react';

function Hello({message}) {

    const [counter, setCounter] = useState(0);

    const diferenca = () => {
        setCounter(counter + 1);
    }

    return (

        <div class="container">
            <div class="mydiv">
                <h1>Hello World!{counter}</h1>
                <button onClick={diferenca}>Mude o "Hello World!"</button>
            </div>
        </div>

    ); 
}

export default Hello;