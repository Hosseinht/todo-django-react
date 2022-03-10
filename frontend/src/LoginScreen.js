import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {connect} from 'react-redux';
import {useDispatch, useSelector} from "react-redux";
import {login} from "./actions/userActions";
import {Container, Form, Row, Col, Button} from "react-bootstrap";

const LoginScreen = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history('/')
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }


    return (
        <div>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <h1>Sign In</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='username'>
                                <Form.Label> Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter Username' value={username}
                                              onChange={(e) => setUsername(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label> Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password}
                                              onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary' className='my-3'>
                                Sign In
                            </Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                New User ? <Link to={'/register'}>Register</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginScreen;
