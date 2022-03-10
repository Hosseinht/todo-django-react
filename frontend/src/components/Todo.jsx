import React from 'react';
import {BsTrash} from "react-icons/bs";
import {MdDone} from "react-icons/md"
import styled from 'styled-components'

const Todo = ({id, title}) => {

    return (
        <Wrapper className='mt-5'>
                <div className='todo'>
                    <div className='todo-title'>
                        <h5>{title}</h5>
                    </div>
                    <div className='d-flex todo-icon flex-row '>
                        <div className='icon-done'>
                            <MdDone size={20}/>
                        </div>
                        <div className='icon-trash'>
                            <BsTrash size={20}/>
                        </div>

                    </div>
                </div>
        </Wrapper>
    );
};

export default Todo;

const Wrapper = styled.div`
  .todo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  .todo-icon {

  }

  .icon-done {
    background: #86fde8;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    border: none;
  }

  .icon-trash {
    background: #f85353;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    border: none;
  }
`