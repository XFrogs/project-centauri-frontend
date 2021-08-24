import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import SkillCard from '../../cards/skillcard';
import NftCard from '../../cards/nftcard';

import splitEvery from '../../utils/columnsSplitter';

import Draggable, {DraggableCore} from 'react-draggable';

import axios from 'axios';

const Editor = props => {



    const [heros, setHeros] = useState([]);
    const [upgrades, setUpgrades] = useState([]);

    useEffect(
        () => {
            //fetch heros
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setHeros( res.data.slice(0, 4) ))
            .then(err => console.log( err ));

            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setUpgrades( res.data.slice(0, 8) ))
            .then(err => console.log( err ));
        },
        []
    );

    return(
        <div className="block mb-0 has-background-dark p-6">
            <div className="container">

                <section className="section p-0 my-6">
                    <div className="columns">
                        <div className="column is-4">
                            <h1 className="title has-text-white">Hero name</h1>
                            <h2 className="subtitle has-text-white">Lorem ipsum dolor sit amet</h2>

                            <div className="box has-background-dark2 p-0">
                                <figure class="image is-2by3">
                                    <img src="https://bulma.io/images/placeholders/320x480.png"/>
                                </figure>
                            </div>
                        </div>

                        <div className="column is-7 is-offset-1">

                            <div className="box has-background-dark2">
                                <h1 className="title has-text-white has-text-centered">Cosmetics</h1>



                                {
                                    splitEvery(upgrades, 4).map( (upgrades4, i) =>

                                        <div className="columns" key={i}>
                                            {
                                                upgrades4.map( (upgrade, j) =>
                                                    <Draggable>
                                                        <div className="column is-3">
                                                            <a className="box">
                                                                <h1 className="subtitle">{upgrade.id}</h1>
                                                                <h1 className="subtitle">{upgrade.title.substr(0, upgrade.title.indexOf(" "))}</h1>
                                                            </a>
                                                        </div>
                                                    </Draggable>
                                                )
                                            }
                                        </div>
                                    )
                                }

                            </div>

                            <div className="box has-background-dark2">
                                <h1 className="title has-text-white has-text-centered">Upgrades</h1>

                                {
                                    splitEvery(upgrades, 4).map( (upgrades4, i) =>

                                        <div className="columns" key={i}>
                                            {
                                                upgrades4.map( (upgrade, j) =>
                                                    <div className="column is-3">
                                                        <a className="box">
                                                            <h1 className="subtitle">{upgrade.id}</h1>
                                                            <h1 className="subtitle">{upgrade.title.substr(0, upgrade.title.indexOf(" "))}</h1>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }

                            </div>


                        </div>
                    </div>
                </section>

                <br/>

                {/* HEROs */}
                <section className="section p-0 my-6 has-text-centered">
                    <div className="container">
                        <h1 className="title has-text-white mb-6 has-text-left">Heros</h1>

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

                    </div>
                </section>

            </div>
        </div>
    );
}

export default Editor;
