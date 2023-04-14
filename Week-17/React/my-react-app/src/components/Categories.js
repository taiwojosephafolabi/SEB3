import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Categories() {
  return (
    <>
    <Navbar class="categories" >
      <Container>
        <Navbar.Brand href="#home">All</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#best-seller">Best Sellers</Nav.Link>
          <Nav.Link href="#new-releases">New Releases</Nav.Link>
          <Nav.Link href="#gift-ideas">Gift Ideas</Nav.Link>
          <Nav.Link href="#customer-service">Customer Service</Nav.Link>
          <Nav.Link href="#prime-video">Prime Video</Nav.Link>
          <Nav.Link href="#today-deals">Today's Deals</Nav.Link>
          <Nav.Link href="#music">Music</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default Categories;
