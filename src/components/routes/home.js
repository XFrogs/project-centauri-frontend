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
                    <figure class="image is-16by9">
                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/shqMtDv4uS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                </div>
            </section>
            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>
        </div>
    );
}

export default Home;
