type User = {
    name: string,
    email: string,
    phone: number,
    password: number | string;
}


let users: User[] = []

function register(user: User) {
    users.push(user)
}   

register ({
    name: "Pepe",
    email: "wevewwe@gmail.com",
    phone: 3423432432,
    password: 1321321
})

console.log(users);