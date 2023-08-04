import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/general-ui/Header'
import ButtonAmount from '../components/menu-buttons/ButtonAmount'
import ButtonCategory from '../components/menu-buttons/ButtonCategory'
import ButtonDifficulty from '../components/menu-buttons/ButtonDifficulty'
import ButtonStart from '../components/menu-buttons/ButtonStart'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setScoreDefault, updateGameState } from '../redux/slices/settingsSlice';
import ButtonsQA from '../components/game-buttons/ButtonsQA';

const App = () => {

 const gameState = useSelector(state => state.settings.gameState)
 const score = useSelector(state => state.settings.score)
 const amtQuestions = useSelector(state => state.settings.amount)
 const dispatch = useDispatch();

 function setGameResetScore(gameState){
  dispatch(updateGameState(gameState));
  dispatch(setScoreDefault());
 }

  return (
    <>
    <Header />
    {gameState === 'main' && (
      <div id='gameWindowContainer'>
        <h2 className='title-header'>Quick Draw Trivia</h2>
        <div className='play-button-container'>
          <Button className='play-button' onClick={() => dispatch(updateGameState('settings'))}>Play Now</Button>
        </div>
      </div>
    )}
    {gameState === 'settings' && (
      <div id='gameWindowContainer'>
        <h2 id='settings-header'>Settings</h2>
        <div id='settings-main-container'>
          <div id='amount-header-container'>
            <h3>Select Amount</h3>
            <div id='amountButtonContainer'>
            <ButtonAmount value={5} />
            <ButtonAmount value={10} />
            <ButtonAmount value={20} />
            <ButtonAmount value={25} />
            </div>
          </div>
            <div id='category-header'>
              <h3>Select Category</h3>
              <div id='category-container'>
                <ButtonCategory value={'Film'} category={11}/>
                <ButtonCategory value={'Books'} category={10}/>
                <ButtonCategory value={'Music'} category={12}/>
                <ButtonCategory value={'Television'} category={14}/>
                <ButtonCategory value={'History'} category={23}/>
                <ButtonCategory value={'Sports'} category={21}/>
              </div>
            </div>
            <div id='difficulty-header'>
              <h3>Select Difficulty</h3>
              <div id='difficulty-container'>
                <ButtonDifficulty value={'Easy'} difficulty={'easy'}/>
                <ButtonDifficulty value={'Medium'} difficulty={'medium'}/>
                <ButtonDifficulty value={'Hard'} difficulty={'hard'}/>
              </div>
            </div>
          <div id='start-container'>
            <ButtonStart />
          </div>
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
        <h2 id='score-header'>You Got {score}/{amtQuestions} Correct!</h2>
        <div id='score-button-container'>
          <Button className='main-menu-button' onClick={() => setGameResetScore('main')}>Return to Main Menu</Button>
          <Button className='main-menu-button' onClick={() => setGameResetScore('settings')}>Return to Settings</Button>
        </div>
      </div>
    )}
  </>
  );
};

export default App;
