import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";
import download from "../assets/download.png";
import './navbar.css';
function CollapsibleExample() {
  return (
    <Navbar className='nav '  sticky="top" collapseOnSelect expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{ width: "30px", height: "30px", marginLeft: "20px" }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className='my-3 mx-3 ' style={{ fontSize: "20px" }}>Home</Nav.Link>
            <Nav.Link href="/about" className='my-3 mx-3' style={{ fontSize: "20px" }}>About</Nav.Link>
            <Nav.Link href="#FAQ" className='my-3 mx-3' style={{ fontSize: "20px" }}>FAQ</Nav.Link>
            <Nav.Link href="#Roadmap" className='my-3 mx-3' style={{ fontSize: "20px" }}>Roadmap</Nav.Link>
            <Nav.Link href="#Careers" className='my-3 mx-3' style={{ fontSize: "20px" }}>Careers</Nav.Link>
            <Nav.Link href="#Blog" className='my-3 mx-3' style={{ fontSize: "20px" }}>Blog</Nav.Link>

          </Nav>
          <Nav className='hid'>
            <Nav.Link href="#deets" style={{ fontSize: "20px", color: "white" }}>Download Now</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img style={{background:"white", height:"33px",width:"36px", borderRadius:"50%"}} src={download} alt="download" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default CollapsibleExample;