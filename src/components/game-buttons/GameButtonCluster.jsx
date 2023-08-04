// import { useSelector } from "react-redux";
// import GameButton from "./GameButton";
// import { useState } from "react";

// function GameButtonCluster () {
//     const questions = useSelector(state => state.questions.questions)
//     const questionIndexState = useSelector(state => state.settings.index)
//     const questionIndex = questionIndexState
//     const questionState = questions
//     const [style, setStyle] = useState('')
//     const buttonArray = []
    
//     function decodeHtml(html) {
//         var txt = document.createElement("textarea");
//         txt.innerHTML = html;
//         return txt.value;
//     }

//     const setBackgroundGreen = () => {
//         setStyle('green')
//     }

//     const setBackgroundRed = () => {
//         setStyle('red')
//     }

//     function generateCorrectButton(){
//         buttonArray.push(
//             <GameButton
//                 style={style}
//                 onClick={setBackgroundGreen}
//                 correct={true}
//                 answer={questionState[questionIndex].correct_answer}
//         />)
//     }

//     function generateIncorrectButtons(){
//         questionState[questionIndex].incorrect_answers.map((answer) => {
//             buttonArray.push(
//                 <GameButton
//                     style={style}
//                     onClick={setBackgroundRed}
//                     correct={false}
//                     answer={answer}
//             />)
//         })
//     }

//     generateCorrectButton();
//     generateIncorrectButtons();

//     return(
//         <div>
//             {buttonArray.map(btn => {
//                 return btn
//             })}
//         </div>
//     )
// }

// export default GameButtonCluster