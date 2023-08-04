import ButtonAmount from './components/menu-buttons/ButtonAmount'
import ButtonCategory from './components/menu-buttons/ButtonCategory'
import ButtonDifficulty from './components/menu-buttons/ButtonDifficulty'
import ButtonStart from './components/menu-buttons/ButtonStart'

const Settings = () => {
    return (
        <>
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
      </>
    )
}

export default Settings;