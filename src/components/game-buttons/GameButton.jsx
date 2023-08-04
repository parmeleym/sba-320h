import { Button } from "react-bootstrap";

function GameButton ({style, onClick, correct, answer}) {

    return(
        <Button 
            className="game-button"
            style={style}
            onClick={onClick}
            correct={correct}
            answer={answer}
        ></Button>
    )
}

export default GameButton