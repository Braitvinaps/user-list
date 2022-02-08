

const SearchBlock = ({ search, setSearch }) => {


    return (
        <div className="input-group mb-3">
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                onClick={() => setSearch('') }
            >Очистить</button>
            <input
                type="text"
                className="form-control"
                placeholder="🔍︎ Поиск по имени или e-mail"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

    )
}

export default SearchBlock;