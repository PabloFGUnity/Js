import { INewUser } from "../interfaces/User";

export  async function get() {
    const response = await fetch("https://reqres.in/api/users?page=2", {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
    });
    return await response.json();

    
}


export  async function post(user: INewUser) {
    const response = await fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    return await response.json();

    
}