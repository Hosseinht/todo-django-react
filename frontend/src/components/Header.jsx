import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";


const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = (e) => {
        dispatch(logout())
    }


    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='justify-content-center m-auto'>
                            {userInfo ? (
                                    <Nav.Link href='/' onClick={logoutHandler}>Logout</Nav.Link>

                                ) :
                                <LinkContainer to='/login'>
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
