
const CardSong = ( props ) => {
 

    return (
        <div className="card-song" >
            <h2>{ props.title }</h2>
            <h3><span>Album:</span> { props.album }</h3>
            <h3><span>Banda:</span> { props.band }</h3>
            <h3><span>Genero:</span> { props.genre }</h3>
            <h3><span>Fecha de lanzamiento:</span> { props.release }</h3>
        </div>
    )
}

export default CardSong
