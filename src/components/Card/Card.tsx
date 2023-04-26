type CardProps = {
    text: string;
}

import './Card.css';

function Card(props: CardProps) {
    return(
        <div className="teste">
            <span>{props.text}</span>
        </div>
    )
}

export default Card;