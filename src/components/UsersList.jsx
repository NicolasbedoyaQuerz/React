const UsersList = ({ usersData })  => {
    return (
        <ul>
            {
                usersData?.map( user => (
                    <li key={ user.id}>
                        <h4><span>nombre:</span> {user.first_name}</h4>
                        <h4><span>Email:</span> {user.email} </h4>
                        <h4><span>Cumpleaños:</span> {user.birthday}</h4>
                    </li>
                ))
            }
        </ul>
    )
}

export default UsersList