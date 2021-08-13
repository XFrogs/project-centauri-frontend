import {useState, useEffect} from 'react';
import {baseURL} from '../../../images.js';
import "./home.scss";
import {Link} from 'react-router-dom';
import NftCard from '../../cards/nftcard';

// import banner from '../../../media/banner.png';

import axios from 'axios';

const UpcomingCard = props => {
    return(
        <div className="box has-background-dark2">
            <h1 className="subtitle has-text-left has-text-white">{props.title}</h1>
            <br/>
            <h1 className="subtitle has-text-left has-text-white">prize pool ${props.price}</h1>
        </div>
    );
}

const Home = props => {

    const [upcomingMatches, setUpcomingMatches] = useState([]);

    const [heros, setHeros] = useState([]);

    useEffect(
        () => {


            //fetch upcoming matches
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setUpcomingMatches( res.data.slice(0, 15) ))
            .then(err => console.log( err ));


            //fetch heros
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setHeros( res.data.slice(0, 4) ))
            .then(err => console.log( err ));

        },
        []
    );



    return(
        <div>
            {/* Banner */}
            <section className="hero is-fullheight-with-navbar has-cool-gradient bg-img">

                <div className="hero-body " style={{background: 'rgba(0, 0, 0, 0.7)'}}>

                </div>

                <div className="hero-foot pb-6" style={{background: 'rgba(0, 0, 0, 0.7)', height: '400px'}}>
                    <div className="container has-text-centered pb-6">

                        <h1 className="title is-1 has-text-centered has-text-white">Fight for freedom, quit your job.</h1>
                        <h1 className="subtitle is-3 has-text-white mt-3">Own a fighter, participate in fight, earn tokens.</h1>

                    </div>
                </div>
            </section>

            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>

            <section className="block has-text-centered p-6 has-background-dark mb-0">

                <h1 className="title has-text-white mb-6">Live fighting</h1>

                <div className="container">

                    <div className="columns">

                        {/* livestreaming */}
                        <div className="column">
                            <figure className="image is-16by9">
                                <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/shqMtDv4uS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </figure>
                        </div>

                        {/* current match info */}
                        <div className="column is-3 has-text-centered">

                            <div className="card has-background-dark2" style={{maxWidth: '250px', left: '50%', transform: 'translate(-50%)'}}>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title is-4 has-text-light">Hero name</p>
                                </div>
                            </div>
                            <h1 className="is-size-2 has-text-white is-1 m-3">VS</h1>
                            <div className="card has-background-dark2" style={{maxWidth: '250px', left: '50%', transform: 'translate(-50%)'}}>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title is-4 has-text-light">Hero name</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* comming matches */}
                    <div className="py-6">
                        <h1 className="title has-text-left has-text-white">Upcoming matches</h1>
                        <div className="columns is-mobile" style={{overflowX: 'scroll'}}>
                            {
                                upcomingMatches.map( (match, i) =>
                                    <div className="column is-desktop is-2" key={i} style={{minWidth: '200px !important'}}>
                                        <UpcomingCard
                                            title={match.title.substr(0, match.title.indexOf(" "))}
                                            price={Math.floor(Math.random() * 30) + 10}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>


                </div>
            </section>

            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>

            {/* HEROs */}
            <section className="block has-text-centered p-6 has-background-dark mb-0">
                <div className="container">
                    <h1 className="title has-text-white mb-6">Heros</h1>

                    <div className="columns">
                    {
                        heros.map( (hero, i) =>
                            <div className="column is-desktop" key={i}>
                                <NftCard
                                    name={hero.username}
                                    price={hero.id}
                                />
                            </div>
                        )
                    }
                    </div>

                    <Link to="/marketplace" className="button is-primary is-outlined">Go to marketplace</Link>

                </div>
            </section>

            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>


        </div>
    );
}

export default Home;
