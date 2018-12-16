import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
  addIceCream: allStores.store.addIceCream
}))

@observer
class IceCreamForm extends Component {

  @observable iceCream = { flavor: "", color: "", img: "" };

  @action inputChange = (i) => {
    this.iceCream[i.target.name] = i.target.value;
  }
  submitForm = (i) => {
    this.props.addIceCream(this.iceCream.flavor, this.iceCream.color, this.iceCream.img);
    this.iceCream.flavor = "";
    this.iceCream.color = "";
    this.iceCream.img = "";
  }

  render() {
    return (
      <div className="container">
      <h1>My iceCream</h1>
        flavor: <input className="flavor" type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor} />
        <br></br><br></br>
        color : <input className="color" type="text" name="color" onChange={this.inputChange} value={this.iceCream.color} />
        <br></br><br></br>
        img:<input className="img" type="text" name="img" onChange={this.inputChange} value={this.iceCream.img} />
        <input className="button" type="button" onClick={this.submitForm} value="submit" />
        <br></br><br></br><br></br>
      </div>
    );
  }
}

export default IceCreamForm;