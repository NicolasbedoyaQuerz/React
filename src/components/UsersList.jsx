

const UsersList = ({usersData, deleteUserAction, selectUser}) => {
    return (
        <ul>
            {
                usersData?.map( user => (
                <li key={user.id}>
                    <h4><span> Titulo: </span>{user.title}</h4>
                    <h4><span> Descripcion: </span> {user.description} </h4>
                    <h4><span> Completado: </span> {user.isCompleted ? 'true' : 'false'} </h4>
                    <button onClick={() => deleteUserAction(user.id)}>Eliminar</button>
                    <button onClick={() => selectUser(user)}>Editar</button>
                </li>
                ) )
            }
        </ul>
    );
};

export default UsersList;