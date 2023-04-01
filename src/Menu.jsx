import React, { useState , useEffect } from 'react';
import Burger from './Burger';
import image from './main-image.jpg';
import {Link} from 'react-router-dom';

export default function Menu2(query) {
    let days = localStorage.getItem('days');
    let [matches , setMatches] = useState(false);
    let [menu , setMenu] = useState(0);
    let [day , setDays] = useState(days ? true : false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: 768px)`);
        if (!media.matches) {
            setMenu(true);
        }
        if (media.matches) {
            setMenu(false);
        }

        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    } , [matches, query]);

    if (menu) {
        return (
            <div className='navigation'>
                <img src={image} alt="img"/>
                    <div>
                        <h2>training</h2>
                    </div>
                    <nav>
                        <div>
                            <ul>
                                <li>
                                    <Link className="route" to="/">main</Link>
                                </li>
                                <li>
                                    <Link className="route" to="/days-training">training</Link>
                                </li>
                                <li>
                                    <Link className="route" to="/result">results</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='burger-block' onClick={() => {
                        setMenu(menu = !menu);
                    }}>
                        <Burger />
                    </div>
            </div>
        )
    }
    else{
        return (
            <div className='navigation'>
                <img src={image} alt='img'/>
                <div>
                    <h2>training </h2>
                </div>
                <div className='burger-block' onClick={() => {
                    setMenu(menu = !menu);
                }}>
                    <Burger />
                </div>
            </div>
        )
    }
}
