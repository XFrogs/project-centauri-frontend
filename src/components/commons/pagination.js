const Pagination = ({ postPerPage, totalPost, onPageClicked}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className="pagination-previous has-text-white">Previous <strong className="has-text-danger"> NW</strong></a>
            <a className="pagination-next has-text-white">Next page<strong className="has-text-danger"> NW</strong></a>
            <ul className="pagination-list">
                {
                    pageNumbers.map( (num, i) =>
                        <li key={i}>
                            <a className={`pagination-link has-text-white ${num == -1 ? 'is-current' : ''}`} onClick={e => onPageClicked(e, num)}>{num}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Pagination;
