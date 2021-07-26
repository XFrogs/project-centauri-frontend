const NftCard = props => {
    return(
        <div className="card has-background-dark2">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content has-text-left">
                <h2 className="subtitle is-6 has-text-light">Owner</h2>
                <div className="level">
                    <h1 className="title is-4 has-text-white m-0">{props.name}</h1>
                    <h1 className="subtitle is-6 has-text-white m-0"><span className="icon"><i className="fab fa-ethereum"></i></span>{props.price}</h1>
                </div>
            </div>
        </div>
    );
}

export default NftCard;
