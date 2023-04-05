
const Foco = ({onTodos, dataSalida}) => {

    // const [ isVisible, setIsVisible] = useState(true)


    return (
        <div >
            <h1 className='foco'  style={{ backgroundColor : onTodos ? 'grey' : 'yellow' }}></h1>
            <button className="btn" onClick={dataSalida}>On / Off</button>
        </div>
    );
};

export default Foco;