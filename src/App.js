import axios from "axios";
import { useEffect, useState } from "react";
import SearchBlock from "./search-block/search-block";
import SortBlock from "./sort-block/sort-block";
import Spinner from "./spinner/spinner";
import Table from "./table/table";


function App() {
  const url = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users'
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [changeSort, setChangeSort] = useState(true)
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setUser(res.data)
        setIsLoading(false)
      })
  }, [])

  const deleteItem = (id) => {
    setUser(user.filter(item => item.id !== id))
  }

  return (
    <div className="container mt-5">
      <h1>Список пользователей</h1>
      <SearchBlock
        setSearch={setSearch}
        search={search}
      />
      <div className="list">
        <SortBlock
          changeSort={changeSort}
          setChangeSort={setChangeSort}
          user={user}
          setUser={setUser}
        />
        {isLoading ?
          <Spinner /> :
          <Table
            user={user}
            search={search}
            onDelete={(id) => deleteItem(id)}
          />}
      </div>
    </div>
  );
}

export default App;
