import { Link, useNavigate } from "react-router-dom";
import Counter from "../components/Counter";
import User from "../components/User";
import { useSelector } from "react-redux";

const Home = () => {

    const navigate = useNavigate()
    const otherCounter = useSelector(state => state.counter)

    const redirect = () => {
        navigate('/Characters')
    }
    return (
        <div>
            <User/>
            <Counter></Counter>
            <button onClick={redirect}>ir a Lista de rick and morty</button>
            <h2> otro counter {otherCounter}</h2>
        </div>
    );
};

export default Home;