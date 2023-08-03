import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateAmount } from "../../redux/slices/settingsSlice";

function ButtonAmount(props) {
    const dispatch = useDispatch()
    const val = props.value;

    return(
        <Button 
            variant="primary"
            className="button-amount" 
            onClick={() => dispatch(updateAmount(val))}
        >{val}</Button>
    );
}

export default ButtonAmount;