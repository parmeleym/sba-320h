import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateDifficulty } from "../../redux/slices/settingsSlice";

function ButtonDifficulty(props) {
    const dispatch = useDispatch()
    const difficulty = props.difficulty;

    return(
        <Button 
            variant="primary"
            className="button-difficulty" 
            onClick={() => dispatch(updateDifficulty(difficulty))}
        >{props.value}</Button>
    );
}

export default ButtonDifficulty;