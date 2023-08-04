import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/general-ui/Header'
import ButtonAmount from './components/menu-buttons/ButtonAmount'
import ButtonCategory from './components/menu-buttons/ButtonCategory'
import ButtonDifficulty from './components/menu-buttons/ButtonDifficulty'
import ButtonStart from './components/menu-buttons/ButtonStart'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateGameState } from './redux/slices/settingsSlice';
import ButtonsQA from './components/game-buttons/ButtonsQA';



const App = () => {

 const gameState = useSelector(state => state.settings.gameState)
 const score = useSelector(state => state.settings.score)
 const amtQuestions = useSelector(state => state.settings.amount)
 const dispatch = useDispatch();

  return (
    <>
    <Header />
    {gameState === 'main' && (
      <div id='gameWindowContainer'>
        <h2>Quick Draw Trivia</h2>
        <Button onClick={() => dispatch(updateGameState('settings'))}>Play Now</Button>
      </div>
    )}
    {gameState === 'settings' && (
      <div id='gameWindowContainer'>
        <div id='amountButtonContainer'>
          <ButtonAmount value={5} />
          <ButtonAmount value={10} />
          <ButtonAmount value={20} />
        </div>
        <div id='categoryButtonContainer'>
          <ButtonCategory value={'Film'} category={11}/>
          <ButtonCategory value={'Books'} category={10}/>
          <ButtonCategory value={'Music'} category={12}/>
          <ButtonCategory value={'Television'} category={14}/>
          <ButtonCategory value={'History'} category={23}/>
          <ButtonCategory value={'Sports'} category={21}/>
        </div>
        <div id='difficultyButtonContainer'>
          <ButtonDifficulty value={'Easy'} difficulty={'easy'}/>
          <ButtonDifficulty value={'Medium'} difficulty={'medium'}/>
          <ButtonDifficulty value={'Hard'} difficulty={'hard'}/>
        </div>
        <div>
          <ButtonStart />
        </div>
      </div>
    )}
    {gameState === 'game' && (
      <div id='gameWindowContainer'>
        <ButtonsQA />
      </div>
    )}
    {gameState === 'scoreScreen' && (
      <div id='gameWindowContainer'>
        <h2>You Got {score}/{amtQuestions} Correct!</h2>
        <div>
          <Button onClick={() => dispatch(updateGameState('main'))}>Return to Main Menu</Button>
          <Button onClick={() => dispatch(updateGameState('settings'))}>Return to Settings</Button>
        </div>
      </div>
    )}
  </>
  );
};

export default App;
