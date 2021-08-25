import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onBurgerClicked = (e) => {
    e.preventDefault();

    const target = e.currentTarget.dataset.target;
    const $target = document.getElementById(target);
    e.currentTarget.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  };

  return (
    <nav
      className="navbar has-background-dark py-0.2"
      role="navigation"
      aria-label="main navigation"
    >
      {/* logo */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-item asd">
          &nbsp;&nbsp;
          <p className="title is-5 has-title-font has-text-white">
            &nbsp; C R Y P U N K S
          </p>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={onBurgerClicked}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* items */}
      <div id="navbar" className="navbar-menu has-background-dark">
        <div className="navbar-end">
          <Link to="/" className="navbar-item has-text-white">
            <h1>home</h1>
          </Link>

          <Link to="/marketplace" className="navbar-item has-text-white">
            <h1>Marketplace</h1>
          </Link>

          <Link to="/profile" className="navbar-item has-text-white">
            <h1>Inventory</h1>
          </Link>

          <Link to="/editor" className="navbar-item has-text-white">
            <h1>Editor</h1>
          </Link>

          <a className="navbar-item has-back">
            {isLoggedIn ? (
              <div>
                <div className="level">
                  <figure className="image is-64x64px">
                    <img
                      className="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png"
                    />
                  </figure>{" "}
                  &nbsp;
                  <h1 className="subtitle">Nickname</h1>
                </div>
              </div>
            ) : (
              <button className="button is-primary is-light">Connect</button>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
