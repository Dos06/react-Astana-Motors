import React from 'react';
import s from './Item.module.css';
import state from './../../../redux/data';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: state.items,
            name: props.name,
            src: props.src
        };
        this.eventOnAdd = this.eventOnAdd.bind(this);
    };

    eventOnAdd() {
        let found = false;
        let foundItem = null;

        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].name === this.state.name) {
                found = true;
                foundItem = this.state.items[i];
                break;
            }
        }
        if (found)
            alert(foundItem.name + " ADDED");
        else
            alert('ERROR');
    }

    render() {
        return (
            <div className="col-sm-4 mt-5">
                <div className="card">
                    <img src={this.state.src} className={"card-img-top " + s.cardImg} alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <button type='button' className="btn btn-success" onClick={this.eventOnAdd}>+ ADD TO CART</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Item;