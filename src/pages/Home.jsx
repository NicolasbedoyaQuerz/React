import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/Characters')
    }
    return (
        <div>
            <button onClick={redirect}>ir a Lista de rick and morty</button>
        </div>
    );
};

export default Home;