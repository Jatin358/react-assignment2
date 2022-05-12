import React from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import '../component.css';
import { useHistory } from "react-router-dom";

function topHeadlines(){
    console.log('Top Headlines');
}   

function Header() {

    const history = useHistory();
    return (
        <div className="header-container">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand ><img src="../../../news_icon.png" className="news-icon"  /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link onClick={()=> { history.push('/dashboard') }}
                            className="active">Dashboad</Nav.Link>
                            <Nav.Link onClick={()=> { history.push('/readNow') }}
                            className="">Readnow</Nav.Link>
                        </Nav>
                        {/* <Nav.Link onClick={()=> { history.push('/readNow')  }}><Button>Read Now</Button></Nav.Link> */}
                        <Nav.Link onClick={()=> { history.push('/') 
                                localStorage.clear() }}><Button>Logout</Button></Nav.Link>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Header;