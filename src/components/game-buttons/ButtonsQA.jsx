import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { incrementIndex, setIndexDefault, setScoreDefault, updateScore } from "../../redux/slices/settingsSlice"
import { updateGameState } from "../../redux/slices/settingsSlice";

function ButtonsQA() {
    const questions = useSelector(state => state.questions.questions)
    const questionIndexState = useSelector(state => state.settings.index)
    const questionsMax = useSelector(state => state.settings.amount)
    const questionIndex = questionIndexState
    const questionState = questions
    const questionsMaxVal = questionsMax
    let answers = [];
    let answerArray = [];
    const [style, setStyle] = useState('');
    const dispatch = useDispatch();

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function randomizeAnswers() {
        answerArray  = []
        console.log(questionState[questionIndex])
        answerArray.push(questionState[questionIndex].correct_answer)
        questionState[questionIndex].incorrect_answers.map(answers => {
            answerArray.push(answers)
        })
        let answerArrayShuffled = answerArray
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        return answerArrayShuffled;
    }

    function checkCorrectAnswer(ans){
        if(ans == questionState[questionIndex].correct_answer){
            setStyle('khaki')
            dispatch(updateScore(1))

        }else{
            setStyle('pink')
        }
        setTimeout(function(){
           setStyle('') 
        }, 1500)
        answerArray = [];
        setTimeout(function(){
            dispatch(incrementIndex())
         }, 1500)
    }

    function setDefaults(){
        dispatch(updateGameState('scoreScreen'));
        dispatch(setIndexDefault());
    }

    if(questionIndex !== questionsMaxVal){
        answers = randomizeAnswers();
    }

    if(questionIndex < questionsMaxVal){
        return(
            <div>
                <h2 className="question-header">{decodeHtml(questionState[questionIndex].question)}</h2>
                <div className="answer-container">
                    {answers.map(ans =>
                        <Button 
                            className="answer-button" 
                            key={ans.id}
                            style={{backgroundColor: style}}
                            onClick={()  => checkCorrectAnswer(ans)}
                        >{ans}</Button>
                    )}
                </div>
            </div>
        )
    }else{
        setDefaults();
    }
}

export default ButtonsQA