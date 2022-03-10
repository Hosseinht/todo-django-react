import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from './HomeScreen'
import LoginScreen from "./LoginScreen";
import Header from "./components/Header";

function App() {
    return (

        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
            </Routes>
        </Router>
    );
}

export default App;

