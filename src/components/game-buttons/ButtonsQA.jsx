import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function ButtonsQA() {
    const questions = useSelector(state => state.questions.questions)
    const questionIndexState = useSelector(state => state.settings.index)
    const questionIndex = questionIndexState
    const questionState = questions
    const answerArray = [];

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function randomizeAnswers() {
        answerArray.push(questionState[questionIndex].correct_answer)
        questionState[questionIndex].incorrect_answers.map(answers => {
            answerArray.push(answers)
        })
        let answerArrayShuffled = answerArray
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        console.log(answerArrayShuffled);
        return answerArrayShuffled;
    }

    // randomizeAnswers();


    // console.log(questionState[0].question);
    // console.log(questionState[0].correct_answer);
    // console.log(questionIndex);

    return(
        // <div>
        //     {questionState.map(question => 
        //         <div key={question.id}>
        //             <h2>{decodeHtml(JSON.stringify(question.question))}</h2>
        //             {question.incorrect_answers.map(answers =>
        //                 <Button key={answers.id}>{answers}</Button>
        //             )}
        //             <Button>{question.correct_answer}</Button>
        //             <br></br>
        //         </div>
        //     )}
        // </div>
        <div>
            {/* <h2>{decodeHtml(JSON.stringify(questionState[questionIndex].question))}</h2>
            <div>
                {randomizeAnswers.map(function (answer, i){
                    return <Button key={i}>{answer}</Button>
                })}
            </div> */}
        </div>
    )
}

export default ButtonsQA