import UsersView from "./UsersView"
import {useEffect} from "react";


function Users() {
  

  useEffect(function () {
    async function api() {
      const response = await fetch(`https://reqres.in/api/users?page=1`);
      const users = await response.json();
      console.log(users);
      
    }
    console.log("render");

    api();
  });

  return (

    <>
      <UsersView  />
      
    </>
  )

}

export default Users