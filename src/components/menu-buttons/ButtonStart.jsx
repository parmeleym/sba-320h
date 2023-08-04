import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/slices/fetchQuestionsSlice";
import { updateGameState } from "../../redux/slices/settingsSlice";

function ButtonStart() {
    const amt = useSelector(state => state.settings.amount)
    const category = useSelector(state => state.settings.category)
    const difficulty = useSelector(state => state.settings.difficulty)
    const gameState = useSelector(state => state.settings.gameState)
    const dispatch = useDispatch();

    async function handleClick(){
        await dispatch(fetchQuestions({amt, category, difficulty}));
        dispatch(updateGameState('game'));
    }

    return(
        <Button 
            onClick={() => handleClick()}
            id="start-button"
        >Start</Button>
    )
}

export default ButtonStart;