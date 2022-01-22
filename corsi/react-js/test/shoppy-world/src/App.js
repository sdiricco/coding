import React from 'react';
import './App.css';
import Card from './components/cards/Card'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card title ={`Tastiera`}
              shortDescription={`Logitech K400 Plus Tastiera Wireless per TV,
                                PC, Laptop/Tablet, Layout Italiano QWERTY`}
              longDescription={`Benvenuto nella sezione "Tastiere, Mouse e
                                periferiche di input" della categoria
                                Informatica di Amazon.it: scopri la nostra
                                selezione in Mouse, Tastiere, Set tastiera e
                                Mouse, Tavolette grafiche, Penne tavoletta
                                grafica, Trackball e tanto altro. Condizioni
                                generali di uso e venditaInformativa sulla
                                privacyArea legaleCookiePubblicità definita
                                in base agli interessi © 2010-2021, Amazon.com,
                                Inc. o società affiliate. `}/>
        <Card />
      </div>
    );
  }
}

export default App;
