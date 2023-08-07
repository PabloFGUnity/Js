type  UserId = string | number;

let userId: UserId;

userId = "fwefewfew"
userId = 123231


function session(userId: UserId) {
    if (typeof userId === "string") {
        console.log(`Hola ${userId.toUpperCase()}`);
    } else {
        console.log(`Tu id de usuuario es el ${userId.toString()}`);
    }
}

session("eewvewewewc")
session(23123213)