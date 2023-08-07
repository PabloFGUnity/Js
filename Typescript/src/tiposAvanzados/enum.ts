export enum ROLES {
    ADMIN = 0,
    USER = 1,
    GUESt = 2
}
(() => {
    

    type User = {
        email:string
        roles: ROLES
    }

    let user: User = {
        email: "pepe@gmail..com",
        roles: ROLES.ADMIN
    }
    console.log(user);
}) ();


