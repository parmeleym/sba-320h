import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className='header-container'>
        <Container>
          <Navbar.Brand href="#home">Quick Draw Trivia</Navbar.Brand>
          <Nav className="ml-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;