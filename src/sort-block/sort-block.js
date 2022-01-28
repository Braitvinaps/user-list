

const SortBlock = ({ changeSort, setChangeSort, user, setUser }) => {

    const onSort = (colum) => {
        let copyUser = [...user]
        if (changeSort) {
            setUser(copyUser.sort((a, b) => a[colum] > b[colum] ? 1 : -1))
        } else if (!changeSort) {
            setUser(copyUser.sort((a, b) => a[colum] < b[colum] ? 1 : -1))
        }
        return setChangeSort(!changeSort)
    }

    return (
        <div>
            <label><b>Сортировка:</b></label>
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => { onSort('registration_date') }}
            >Дата регистрации</button>
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => { onSort('rating') }}
            >Рейтинг</button>
        </div>
    )
}

export default SortBlock;