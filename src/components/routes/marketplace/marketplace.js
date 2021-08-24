import {useState, useEffect} from 'react';

import NftCard from '../../cards/nftcard';
import splitEvery from '../../utils/columnsSplitter';
import Pagination from '../../commons/pagination';

import axios from 'axios';

import './marketplace.scss';

const Marketplace = props => {

    const url = 'https://jsonplaceholder.typicode.com/todos';

    //NTT cards
    const [data, setData] = useState([]);
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);





    const displayItemsNumber = 20;
    const [divisions, setDivisions] = useState(0);

    useEffect(
        () => {

            const fetchPosts = async () => {

                setLoading(true);
                const res = await axios.get(url);
                setData(res.data);
                setLoading(false);
            }
            fetchPosts();
        },
        []
    );

    // Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const onPageClicked = (e, pageNumber) =>{

        // const active = document.querySelector('.is-current');
        //
        // active.classList.toggle('.is-current');
        // e.target.classList.toggle('.is-current');

        setCurrentPage(pageNumber);

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

                    {/* pagination */}
                    <Pagination
                        postPerPage={postPerPage}
                        totalPost={data.length}
                        onPageClicked={onPageClicked}
                    />



                    {/* Search bar & filters */}
                    <nav className="columns">

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


                    </nav>

                    <br/><br/>

                    {/* nfts */}

                        {
                            splitEvery(currentPosts, 4).map( (heros, i) =>
                                <div key={i}>
                                    <div className="columns mb-6" >
                                        {
                                            heros.map( (hero, j) =>
                                                <div className="column is-3" key={j}>
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

                    {/* pagination */}
                    <Pagination
                        postPerPage={postPerPage}
                        totalPost={data.length}
                        onPageClicked={onPageClicked}
                    />


                </div>
            </section>

        </div>
    );
}

export default Marketplace;
