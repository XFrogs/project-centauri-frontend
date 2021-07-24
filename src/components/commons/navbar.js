import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

    const onBurgerClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    return(
        <nav className="navbar py-3" role="navigation" aria-label="main navigation">


            {/* logo */}
            <div className="navbar-brand">
                <Link to="/" className="navbar-item asd">&nbsp;&nbsp;


                    <p className="title is-5 is-family-primary">&nbsp; Centauri</p>
                </Link>



                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* items */}
            <div id="navbar" className="navbar-menu">


                <div className="navbar-end">

                    <Link to="/" className="navbar-item">
                        <span className="icon"><i className="fas fa-home"></i></span>&nbsp;
                        <h1>home</h1>
                    </Link>

                    <Link to="/marketplace" className="navbar-item">
                        <span className="icon"><i className="fas fa-store"></i></span>&nbsp;
                        <h1>Marketplace</h1>
                    </Link>

                    <Link to="/marketplace" className="navbar-item">
                        <span className="icon"><i className="fas fa-store"></i></span>&nbsp;
                        <h1>Inventory</h1>
                    </Link>

                </div>


            </div>


        </nav>
    );

}

export default NavBar;
;
