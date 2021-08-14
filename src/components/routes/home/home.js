import {useState, useEffect} from 'react';
import {baseURL} from '../../../images.js';
import "./home.scss";
import {Link} from 'react-router-dom';
import NftCard from '../../cards/nftcard';

import TechButton from './techButton';

import hero from './hero.png';

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

    const toggleState = () => {

        console.log(buttonState);
        if(buttonState == 0)
            setButtonState(1);

        else setButtonState(0);
    }


    const [buttonState, setButtonState] = useState(0);



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
            <section className="hero is-medium has-cool-gradient bg-img herop">

                <div className="hero-body " >

                </div>

                <div className="hero-foot pb-6" style={{height: '400px'}}>
                    <div className="container has-text-centered pb-6">

                        <h1 className="title is-1 has-text-centered has-text-white has-text-weight-bold" style={{fontSize: '3.5rem'}}>fight for freedom, quit your job.</h1>
                        <h1 className="subtitle is-3 has-text-white mt-3 is-hidden-touch" style={{fontSize: '2.5rem'}}>Own a fighter, participate in fight, earn tokens.</h1>

                    </div>
                </div>

                <div className="banner-tint">
                </div>
            </section>

            <hr className="p-0 m-0" style={{background: '#2e3b4a'}}/>

            <section className="block has-text-centered p-6 has-background-dark mb-0">


                <div className="container video-div" style={{zIndex: '11'}}>




                    <div className="columns">


                        {/* livestreaming */}
                        <div className="column">
                            <figure className="image is-16by9">
                                <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/shqMtDv4uS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </figure>
                        </div>

                        {/* current match info */}
                        <div className="column is-3 has-text-centered">

                            <div className="box has-background-dark is-flex is-flex-direction-column is-justify-content-center " style={{height: '100%'}}>

                            {
                                buttonState == 0 ?
                                <img src={hero} className="is-flex-grow-1 p-3" style={{borderRadius: '20px'}}/>
                                :
                                <div className="box has-background-dark2 is-flex-grow-1">
                                    <div class="spinner-box">
                                        <div class="blue-orbit leo">
                                        </div>

                                        <div class="green-orbit leo">
                                        </div>

                                        <div class="red-orbit leo">
                                        </div>

                                        <div class="white-orbit w1 leo">
                                        </div>
                                        
                                        <div class="white-orbit w2 leo">
                                        </div>

                                        <div class="white-orbit w3 leo">
                                        </div>
                                    </div>
                                </div>

                            }


                                <TechButton
                                    currentState={buttonState}
                                    onClick={toggleState}
                                    disabled={false}
                                >{buttonState == 0 ? 'Fight' : ' Cancel'}</TechButton>
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
