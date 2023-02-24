const UserCard = ({userData}) => {
    return (
        <div className="user-card">
            <h1>{userData.name.title} {userData.name.first} {userData.name.last}</h1>
            <img src={ userData.picture.large} alt="" />
            <ul>
                <li><i class='bx bx-envelope'></i>{userData.email}</li>
                <li><i class='bx bx-phone' ></i>{userData.phone} / {userData.cell}</li>
                <li><i class='bx bx-home' ></i>{userData.location.street.name} / {userData.location.city} / {userData.location.state} / {userData.location.country}</li>
            </ul>
        </div>
    )
}

export default UserCard