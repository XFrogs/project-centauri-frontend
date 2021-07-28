import {useEffect, useState} from 'react';

import NftCard from '../../cards/nftcard';
import splitEvery from '../../utils/columnsSplitter';

import axios from 'axios';

import './profile.scss';

const MatchCard = props => {

    const victory = props.victory;
    const text = victory ? 'victory' : 'defeated';

    return(
        <div className="box has-background-dark">
            <h1 className="title has-text-white has-text-left">title</h1>
            <h1 className="subtitle has-text-white has-text-left">VS player.name</h1>
            <div className={`box p-3 has-text-white has-background-${victory ? 'success' : 'danger'}`}>{text}</div>
        </div>
    );
}



const Profile = props => {

    const [heros, setHeros] = useState([]);

    useEffect(
        () => {


            //fetch heros
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setHeros( res.data.slice(0, 6) ))
            .then(err => console.log( err ));

        },
        []
    );


    return(
        <div className="has-text-centered has-background-dark mb-0">

            <div className="bg-photo" >
                <img src="https://bulma.io/images/placeholders/256x256.png" style={{opacity: '0'}}/>
            </div>
            <img className="photo" src="https://bulma.io/images/placeholders/128x128.png"/>

            <h1 class="title is-2 has-text-white ">Nickname</h1>

            <br/>
            <div className="block has-text-centered p-6 has-background-dark mb-0">
                <div className="container">


                    <div className="columns">

                        <div className="column is-9">
                            <h1 className="title has-text-white">Your heros</h1>
                        {
                            splitEvery(heros, 3).map( (heros, i) =>
                                <div key={i}>
                                    <div className="columns mb-6" >
                                        {
                                            heros.map( (hero, j) =>
                                                <div className="column" key={j}>
                                                    <NftCard
                                                        name={hero.title.substr(0, hero.title.indexOf(" "))}
                                                        price={(Math.random() * 3).toFixed(2)}
                                                    />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <br/>
                                </div>

                            )
                        }
                        </div>


                        <div className="column">
                            <h1 className="title has-text-white ">Match history</h1>
                            <div className="box has-background-dark2">
                            {

                            }
                                <MatchCard victory/>
                                <MatchCard/>
                                <MatchCard victory/>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
}

export default Profile;
