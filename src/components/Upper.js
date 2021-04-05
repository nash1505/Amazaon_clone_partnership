import React, { Component } from 'react'
import 'fomantic-ui-css/semantic.css';
import '../assets/fomantic/dist/semantic.css';
import logo from '../images/download.png'

import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Sample from './Sample'

class Upper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            mobiles_search: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        if (this.state.value === 'mobiles') {
            this.setState({ mobiles_search: true })
        }

        event.preventDefault();
    }


    render() {
        const { mobiles_search } = this.state
        return (
            <div class="ui fluid container" className="c1">
                <div class="ui grid">
                    <div class="row" className="row">




                        <div class="two wide column" className="logo">
                            <img class="ui small image" src={logo} />
                        </div>



                        <div class="two wide column" className="add">
                            Hello
                        <p><span className="textbold">Select Your Address</span></p>


                        </div>
                        <div class="seven wide column">
                            <form onSubmit={this.handleSubmit}>
                                <div class="ui action input">
                                    <div class="ui dropdown" className="dropdown_1">
                                        <div >All</div>
                                        <i class="dropdown icon"></i>
                                    </div>
                                    <input size="65" type="text" value={this.state.value} onChange={this.handleChange} />
                                    <button class="ui icon button" className="searchbutton" type="submit" onSubmit={this.handleSubmit} >
                                        <i class="search icon"></i>
                                    </button>
                                </div>
                            </form>
                            {mobiles_search && (<Redirect to='/mobiles' />)}
                        </div>








                        <div class="one wide column" className="flag">
                            <div class="ui dropdown">

                                <div class="text"><i class="in flag"></i></div>
                                <i class="dropdown icon"></i>
                                <div class="menu">
                                    <div class="item"><i class="in flag"></i></div>
                                    <div class="item"><i class="in flag"></i></div>
                                    <div class="item"><i class="in flag"></i></div>
                                </div>
                            </div>
                        </div>


                        <div class="two wide column" className="sign">
                            <Link to="/link">
                                Hello,Sign in
                                <p>Account & Lists</p>
                            </Link>
                        </div>

                        <div class="one wide column" className="return">
                            <a href="#">
                                Returns
                        <p>
                                    & Order
                        </p>
                            </a>
                        </div>
                        <div class="one wide column" className="cart">

                            <i class="shopping cart icon"></i>
                            <p>Cart</p>
                        </div>

                    </div>

                </div>
                <div class="ui segment" className="nav-bar">

                    <div class="ui inverted secondary menu" >
                        <a class="item"><i class="bars icon"></i>All</a>
                        <a class="item">Best Sellers</a>
                        <a class="item"><Link to="/mobiles">Mobiles</Link></a>
                        <a class="item">Today's Deals</a>
                        <a class="item">Fashion</a>
                        <a class="item">New Releases</a>
                        <a class="item">Prime<i class="dropdown icon"></i></a>
                        <a class="item">Electronics</a>
                        <a class="item">Customer Service</a>
                    </div>

                </div>

            </div>
        )
    }

}

export default Upper


