import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './navbar.scss';

function NavBar() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const onBurgerClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    return(
        <nav className="navbar has-background-dark py-3" role="navigation" aria-label="main navigation">


            {/* logo */}
            <div className="navbar-brand">
                <Link to="/" className="navbar-item asd">&nbsp;&nbsp;


                    <p className="title is-5 is-family-primary has-text-white">&nbsp; Centauri</p>
                </Link>



                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* items */}
            <div id="navbar" className="navbar-menu has-background-dark">


                <div className="navbar-end">

                    <Link to="/" className="navbar-item has-text-light">
                        <span className="icon"><i className="fas fa-home"></i></span>&nbsp;
                        <h1>home</h1>
                    </Link>

                    <Link to="/marketplace" className="navbar-item has-text-light">
                        <span className="icon"><i className="fas fa-store"></i></span>&nbsp;
                        <h1>Marketplace</h1>
                    </Link>

                    <Link to="/marketplace" className="navbar-item has-text-light">
                        <span className="icon"><i className="fas fa-store"></i></span>&nbsp;
                        <h1>Inventory</h1>
                    </Link>


                    <a className="navbar-item has-back">
                        {
                            isLoggedIn ?
                            <div>
                                <div className="level">

                                    <figure class="image is-64x64px">
                                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                                    </figure> &nbsp;
                                    <h1 className="subtitle">Nickname</h1>
                                </div>
                            </div>
                            :
                            <button class="button is-primary is-light">Connect</button>
                        }

                    </a>

                </div>


            </div>


        </nav>
    );

}

export default NavBar;
;
