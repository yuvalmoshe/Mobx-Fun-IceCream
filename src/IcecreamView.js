import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class IcecreamView extends Component {
    deleteFrom = () => {
        console.log(this);
        this.props.store.removeIceCream(this.props.i)
      }
    // @observable editFrom = () => {
    //     this.props.editIceCream(this.props.i)   
    // }

    render() {
        return (
            <div className="IcecreamView">
                <li key={this.props.i.color}>flavor: {this.props.i.flavor}, color: {this.props.i.color}
                    <input className="delete" type="button" onClick={this.deleteFrom} value="delete" />
                    {/* <input className="edit" type="button" onClick={} value="Edit" /> */}

                </li>
                <img src={this.props.i.img} height="200" width="300" />

            </div>
        )
    }
}

export default IcecreamView;