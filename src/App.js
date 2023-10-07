//import all the needed react-bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
    {/* Navigation and Header */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br/>

      
    {/* Card section */}
    <Container className='d-flex flex-row'>
      <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Body>
          <Card.Title>Welcome Home</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Where is home?</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione expedita pariatur sint neque minus error molestias odit aliquam. Ut.
          </Card.Text>
          <Card.Link href="#">About us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Body>
          <Card.Title>Welcome Home</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Where is home?</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione expedita pariatur sint neque minus error molestias odit aliquam. Ut.
          </Card.Text>
          <Card.Link href="#">About us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Body>
          <Card.Title>Welcome Home</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Where is home?</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione expedita pariatur sint neque minus error molestias odit aliquam. Ut.
          </Card.Text>
          <Card.Link href="#">About us</Card.Link>
          <Card.Link href="#">Contact Us</Card.Link>
        </Card.Body>
    </Card>
  </Container>
    </>
  );
}

export default App;