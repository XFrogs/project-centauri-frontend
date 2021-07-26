import {useState, useEffect} from 'react';

import NftCard from '../../cards/nftcard';
import splitEvery from '../../utils/columnsSplitter';
import axios from 'axios';

import './marketplace.scss';

const Marketplace = props => {

    const [nfts, setNfts] = useState([]);

    const [current, setCurrent] = useState(20);

    useEffect(
        () => {

            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setNfts(res.data.splice(0, current)) );

        },
        []
    );

    const onNextClicked = e => {
        e.preventDefault();

        setNfts([]);

        const iniVal = current;

        setCurrent(current + current);

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setNfts(res.data.splice(iniVal, current)) );
    }



    return(
        <div>

            {/* artwork */}
            <section className="block has-text-centered p-6 has-background-dark mb-0">
                <div className="container">

                    <figure className="image is-3by1 banner">
                        <img src="https://i.pinimg.com/originals/4e/a8/4f/4ea84f04d08d72d2cd574d14f5dad176.jpg"/>
                    </figure>





                </div>
            </section>



            <section className="block has-text-centered p-6 has-background-dark mb-0">
                <div className="container">

                <nav class="pagination" role="navigation" aria-label="pagination">
                  <a class="pagination-previous has-text-white">Previous</a>
                  <a class="pagination-next has-text-white" onClick={onNextClicked}>Next page</a>
                  <ul class="pagination-list">
                    <li>
                      <a class="pagination-link has-text-white" onClick={onNextClicked} aria-label="Goto page 1">1</a>
                    </li>
                    <li>
                      <span class="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                      <a class="pagination-link has-text-white" aria-label="Goto page 45">45</a>
                    </li>
                    <li>
                      <a class="pagination-link has-text-white is-current" aria-label="Page 46" aria-current="page">46</a>
                    </li>
                    <li>
                      <a class="pagination-link has-text-white" aria-label="Goto page 47">47</a>
                    </li>
                    <li>
                      <span class="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                      <a class="pagination-link has-text-white" aria-label="Goto page 86">86</a>
                    </li>
                  </ul>
                </nav>



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
