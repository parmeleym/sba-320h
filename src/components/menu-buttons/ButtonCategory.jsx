import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../redux/slices/settingsSlice";

function ButtonCategory(props) {
    const dispatch = useDispatch()
    const category = props.category;

    return(
        <Button 
            variant="primary"
            className="button-category" 
            onClick={() => dispatch(updateCategory(category))}
        >{props.value}</Button>
    );
}

export default ButtonCategory;