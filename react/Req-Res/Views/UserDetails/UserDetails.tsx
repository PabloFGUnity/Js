import { useParams } from "react-router-dom";
import { IUser } from "../../src/interfaces/User";
import UserDetailsView from "./UserDetailsView";
import {useEffect, useState } from "react";


function UserDetails() {
    const [user, setUser] = useState<IUser | null>(null)
    const {id} = useParams()

    useEffect(function () {
        async function api() {
          const response = await fetch(`https://reqres.in/api/users/${id}`);
          const detail = await response.json();
          console.log(detail.data);
          setUser(detail.data)
        }
        console.log("render");
    
        api();
      },[id]);


  return (
    <UserDetailsView user={user}/>
  )
}

export default UserDetails