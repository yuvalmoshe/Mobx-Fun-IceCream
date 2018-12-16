import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import IceCreamForm from "./IceCreamForm";
import IcecreamView from "./IcecreamView";

@inject("store")
@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        <IceCreamForm addIceCream={this.props.store.addIceCream} />
        <ul className="iceCreams">
          {this.props.store.iceCreams.map(i => {
            return <IcecreamView i={i} key={i.color}/>

          })}

        </ul>
      </div>

    );
  }
}

export default App;
