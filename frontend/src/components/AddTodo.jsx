import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import styled from 'styled-components'
import {useDispatch,} from "react-redux";
import {createTodo} from "../actions/todoAction";


const AddTodo = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')


    const submitHandler = () => {
        dispatch(createTodo({title, is_done: false}))

    }

    return (
        <Wrapper className='d-flex flex-row'>
            <Form className='flex-grow-1 px-2'>
                <Form.Control type="text" placeholder='Enter Todo Title' onChange={e => setTitle(e.target.value)}/>
            </Form>
            <Button variant={'primary'} type="submit" onClick={submitHandler}>Add</Button>
        </Wrapper>
    );
};

export default AddTodo;

const Wrapper = styled.div`
  button {
    color: white;
    background-color: #86fde8;;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;

    &:hover {
      background: #53fce2;
      color: white;
      border: darkblue;
    }
  }
`