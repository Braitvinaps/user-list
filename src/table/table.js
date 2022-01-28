

const Table = ({ user, search, onDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя пользователя</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Дата регистрации</th>
                    <th scope="col">Рейтинг</th>
                </tr>
            </thead>
            {user
                .filter((val) => {
                    if (val.username.toLowerCase().includes(search.toLowerCase()) || val.email.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    } else if (search === '') {
                        return val
                    }
                })
                .map((item) => {
                    const {id, username, email, registration_date, rating } = item
                    return (
                        <tbody key={id}>
                            <tr>
                                <th scope="row">{username}</th>
                                <td>{email}</td>
                                <td>{registration_date.slice(0, 10).split('-').reverse().join('.')}</td>
                                <td>{rating}</td>
                                <td><button
                                    type="button"
                                    className="btn"
                                    onClick={() => onDelete(id)}
                                >✖</button></td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}

export default Table;