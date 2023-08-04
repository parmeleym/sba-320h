import { Button } from "react-bootstrap";

const Home = () => {
  const history = History();
  const settingsPage = () => {
    history.push('/settings')
  }
    return (
        <>
        <div id='gameWindowContainer'>
          <h1>Quick Draw Trivia</h1>
          <Button onClick={}>Play Now</Button>
        </div>
      </>
    )
}

export default Home;