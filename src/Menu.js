import React, {Component} from 'react';
import Burger from './Burger';
import image from './main-image.jpg';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: true,
            matches: false
        };

        this.stateMenu = this.stateMenu.bind(this);
        this.eventType = this.eventType.bind(this);
    }

    stateMenu() {
        this.setState(state => ({
            menu: !state.menu,
            matches: !state.matches
        }))
    }


    componentWillMount() {
        const match = window.matchMedia(`(max-width: 768px)`);

        if (!match.matches) {
            this.setState(state => ({
                menu: true,
                matches: false
            }));
        }
        if (match.matches) {
            this.setState(state => ({
                menu: false,
                matches: true
            }));
        }
    }

    eventType() {
        console.log();
    }

    render() {
        if (this.state.menu && !this.state.matches) {
            return (
                <div className='navigation'>
                    <img src={image} alt="img"/>
                    <nav>
                        <div>
                            <ul>
                                <li>
                                    <Link className="route" onClick={this.eventType(Event)} to="/">main</Link>
                                </li>
                                <li>
                                    <Link className="route" to="/days-training">training</Link>
                                </li>
                                <li>
                                    <Link className="route" to="/result">results</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='burger-block' onClick={this.stateMenu}>
                            <Burger />
                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className='navigation'>
                    <div>
                        <img src={image} alt='img'/>
                    </div>
                    <div className='burger-block' onClick={this.stateMenu}>
                        <Burger />
                    </div>
                </div>
            )
        }
    }
}
