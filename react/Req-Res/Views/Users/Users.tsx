import { IUser } from "../../src/interfaces/User";
import UsersView from "./UsersView"
import {useEffect, useState } from "react";


function Users() {
  const [users, setUsers] = useState<IUser[] | null>(null);

  const [page, setPage] =useState<number>(1);

  const handleChange = ( _event:unknown,value:number) => {
    setPage(value);
  };

  useEffect(function () {
    async function api() {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const usersData = await response.json();
      setUsers(usersData.data)
      console.log(usersData);
    }
    console.log("render");

    api();
  },[page]);

  const totalPages:number = 2;
  return (
    
      <UsersView users={users} page={page} total={totalPages} onChange={handleChange}/>
    
  )

}

export default Users