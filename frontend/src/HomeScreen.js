import AddTodo from "./components/AddTodo";
import {Card, Col, Container, Row} from "react-bootstrap";
import styled from 'styled-components'
import Todo from "./components/Todo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {listTodos} from "./actions/todoAction";
import Loader from "./components/Loader";


function App() {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todoList)
    const {loading, todos} = todoList

    useEffect(() => {
        dispatch(listTodos())
    }, [dispatch])

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    return (
        loading ? (
            <Loader/>
        ) : (
            <Wrapper>

                <Container className='d-flex justify-content-center '>
                    {userInfo ? (
                        <Row className="w-75 p-5">
                            <Col>
                                <Card className='todo-card '>
                                    <h2>Todo App</h2>
                                    <AddTodo/>
                                    {todos.map((todo, id) => (
                                        <Todo id={todo.id} title={todo.title}/>
                                    ))}
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <h1>You need to log in</h1>
                    )}
                </Container>
            </Wrapper>
        )
    );
}

export default App;

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #acb6e5, #86fde8);
  height: 100vh;

  h2 {
    margin-bottom: 20px;
    align-self: center;
  }

  .login {
    display: flex;
    align-self: center;
  }

  .todo-card {
    padding: 30px;
    margin-left: auto;
  }
`