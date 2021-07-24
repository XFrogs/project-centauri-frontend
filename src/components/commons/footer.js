import React from 'react';



const Footer = () => {

    return(
        <footer className="footer has-background-light">
            <div className="container">

                <div className="columns">

                    <div className="column">
                        <ul>
                            <h1 className="title is-5">Centauri</h1>
                            <li className="footer-item"><a>About</a></li>
                            <li className="footer-item"><a>White paper</a></li>
                            <li className="footer-item"><a>Roadmap</a></li>
                            <li className="footer-item"><a>News</a></li>
                            <li className="footer-item"><a>F.A.Q</a></li>
                        </ul>
                    </div>

                    <div className="column ">
                        <ul>
                            <h1 className="title is-5">Tutorials</h1>
                            <li className="footer-item"><a>Quick start</a></li>
                            <li className="footer-item"><a>How to play</a></li>
                            <li className="footer-item"><a>Buying / Selling heros</a></li>
                        </ul>
                    </div>

                    <div className="column ">
                        <ul>
                            <h1 className="title is-5">Team</h1>
                            <li className="footer-item"><a>Who are we</a></li>
                            <li className="footer-item"><a>Join us</a></li>
                        </ul>
                    </div>

                    <div className="column ">
                        <ul>
                            <h1 className="title is-5">Contact</h1>
                            <li className="footer-item"><a>Email us</a></li>
                            <li className="footer-item"><a>Report a bug</a></li>

                            <li className="footer-item is-size-4">
                                <a target="_blank"><span className="icon"><i className="fab fa-telegram"></i></span>&nbsp;&nbsp;</a>
                                <a target="_blank"><span className="icon"><i className="fab fa-twitter"></i></span>&nbsp;&nbsp;</a>
                                <a target="_blank"><span className="icon"><i className="fab fa-youtube"></i></span>&nbsp;&nbsp;</a>
                                <a target="_blank" href="https://www.instagram.com/bootylicioouus"><span className="icon"><i className="fab fa-instagram"></i></span>&nbsp;&nbsp;</a>
                                <a target="_blank"><span className="icon"><i className="fab fa-discord"></i></span>&nbsp;&nbsp;</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="content has-text-centered">
                    <p className="is-size-4">
                        {new Date().getFullYear().toString()}  <strong>Centauri</strong>
                        &nbsp;&nbsp;
                    </p>
                    <p className="is-size-3">



                        {/*}&nbsp;&nbsp;
                        <a href="" target="_blank">
                            <span className="icon"><i className="fab fa-facebook"></i></span>
                        </a>

                        &nbsp;&nbsp;
                        <a href="" target="_blank">
                            <span className="icon"><i className="fab fa-twitter"></i></span>
                        </a>

                        &nbsp;&nbsp;
                        <a href="" target="_blank">
                            <span className="icon"><i className="fab fa-telegram-plane"></i></span>
                        </a>

                        &nbsp;&nbsp;
                        <a href="" target="_blank">
                            <span className="icon"><i className="fab fa-discord"></i></span>
                        </a>*/}
                    </p>
                </div>
            </div>
        </footer>
    );

}

export default Footer;
