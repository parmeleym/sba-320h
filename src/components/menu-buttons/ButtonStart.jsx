import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/slices/fetchQuestionsSlice";

function ButtonStart() {
    const amt = useSelector(state => state.settings.amount)
    const category = useSelector(state => state.settings.category)
    const difficulty = useSelector(state => state.settings.difficulty)
    const dispatch = useDispatch();
    return(
        <Button 
            onClick={
                () => dispatch(fetchQuestions({amt, category, difficulty}))
            }
        >Start</Button>
    )
}

export default ButtonStart;