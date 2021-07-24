import "./home.scss"

import {baseURL} from '../../images.js';

const Home = props => {
    return(
        <div>
            <section class="hero  has-cool-gradient">
                <div class="hero-body">

                    <div class="container">
                        <div class="columns is-vcentered">
                            <div class="column has-text-centered-mobile">
                                <h1 class="title is-1 has-text-white">Centauri</h1>
                                <p class="subtitle has-text-white has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                                <button class="button is-primary">Start playing</button> &nbsp;
                                <button class="button">Button</button>

                            </div>

                            <div class="column is-offset-1">

                                <img src="https://wonder-day.com/wp-content/uploads/2020/11/wonder-day-png-cyberpunk-2077-10.png"/>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>
            <section className="block has-text-centered p-6 has-background-dark mb-0">

                <h1 className="title has-text-white">Live fighting</h1>

                <div className="container">

                    <div className="columns">

                        {/* livestreaming */}
                        <div className="column">
                            <figure class="image is-16by9">
                                <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/shqMtDv4uS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </figure>
                        </div>

                        {/* current match info */}
                        <div className="column is-3 has-text-centered">

                            <div class="card has-background-dark2" style={{maxWidth: '250px', left: '50%', transform: 'translate(-50%)'}}>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="title is-4 has-text-light">Hero name</p>
                                </div>
                            </div>
                            <h1 className="is-size-2 has-text-white is-1 m-3">VS</h1>
                            <div class="card has-background-dark2" style={{maxWidth: '250px', left: '50%', transform: 'translate(-50%)'}}>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="title is-4 has-text-light">Hero name</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* comming matches */}
                    <div className="py-6">
                        <h1 className="title has-text-left has-text-white">Upcoming matches</h1>
                        <div className="columns">
                            <div className="column">
                                <div className="box has-background-dark2">
                                    <h1 className="subtitle has-text-left has-text-white">Name</h1>
                                    <br/>
                                    <h1 className="subtitle has-text-left has-text-link">$25 USD</h1>                                    

                                </div>
                            </div>
                            <div className="column">
                                <div className="box has-background-dark2">
                                    <h1 className="subtitle has-text-left has-text-white">Name</h1>
                                    <br/>
                                    <h1 className="subtitle has-text-left has-text-link">$25 USD</h1>                                    

                                </div>
                            </div>
                            <div className="column">
                                <div className="box has-background-dark2">
                                    <h1 className="subtitle has-text-left has-text-white">Name</h1>
                                    <br/>
                                    <h1 className="subtitle has-text-left has-text-link">$25 USD</h1>                                    

                                </div>
                            </div>
                            <div className="column">
                                <div className="box has-background-dark2">
                                    <h1 className="subtitle has-text-left has-text-white">Name</h1>
                                    <br/>
                                    <h1 className="subtitle has-text-left has-text-link">$25 USD</h1>                                    

                                </div>
                            </div>
                            <div className="column">
                                <div className="box has-background-dark2">
                                    <h1 className="subtitle has-text-left has-text-white">Name</h1>
                                    <br/>
                                    <h1 className="subtitle has-text-left has-text-link">$25 USD</h1>                                    

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>
        </div>
    );
}

export default Home;
