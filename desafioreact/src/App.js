import react from 'react';
import HelloWorld from './componentes/HelloWorld';
import './App.css';

function App(){

  const text = "Hello World!"

  return (
    <div classname="App">
      <HelloWorld texto = { text } cor = "lawngreen" fontSize = "15px"/>
      <HelloWorld texto = { text } cor = "red" fontSize = "40px"/>
      <HelloWorld texto = { text } cor = "gray" fontSIze = "63px"/>
      <HelloWorld texto = { text } cor = "yellow" fontSize = "50px"/>
      <HelloWorld texto = { text } cor = "green" fontSize = "32px"/>
      <HelloWorld texto = { text } cor = "maroon" fontSize = "60px"/>
      <HelloWorld texto = { text } cor = "purple" fontSize = "100px"/>
      <HelloWorld texto = { text } cor = "brown" fontSize = "85px"/>
      <HelloWorld texto = { text } cor = "indigo" fontSize = "25px"/>
      <HelloWorld texto = { text } cor = "pink" fontSize = "40x"/>
    </div>
  );
}

export default App;
