import {useState, useEffect} from 'react';

import NftCard from '../../cards/nftcard';
import splitEvery from '../../utils/columnsSplitter';
import axios from 'axios';

const Marketplace = props => {

    const [nfts, setNfts] = useState([]);

    useEffect(
        () => {

            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setNfts(res.data) );

        },
        []
    );


    return(
        <div>
            <section className="block has-text-centered p-6 has-background-dark mb-0">
                <div className="container">

                    {/* Search bar & filters */}
                    <div className="columns">

                        <div className="column">
                            <div className="level">
                                <div className="level-right">
                                    <div className="level-item">
                                        <button className="button">Subject</button>
                                    </div>
                                    <div className="level-item">
                                        <button className="button">Item</button>
                                    </div>
                                    <div className="level-item">
                                        <button className="button">Upgrade</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="field has-addons">
                                <p className="control is-expanded">
                                    <input className="input" type="text" placeholder="Search an item"/>
                                </p>
                                <p className="control">
                                    <a className="button is-primary">
                                        <span className="icon"><i className="fas fa-search"></i></span> &nbsp;
                                        Search
                                    </a>
                                </p>
                            </div>
                        </div>


                    </div>

                    <br/><br/>

                    {/* nfts */}

                        {
                            splitEvery(nfts, 4).map( (heros, i) =>
                                <div>
                                    <div className="columns mb-6" key={i}>
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
            </section>

        </div>
    );
}

export default Marketplace;
