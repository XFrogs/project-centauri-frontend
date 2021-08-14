import './techButton.scss';

const TechButton = props => {

    return(
        <button className={`button is-large techButton has-text-white ${props.currentState == 0 ? 'has-bg-blue' : 'has-bg-pink'}`}
            disabled ={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default TechButton;
