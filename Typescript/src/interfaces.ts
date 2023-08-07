(() => {

    type UserAuth = {
        email: string;
        password: string;
    }

    type User = {
        email: string;
        password: string;
        name: string;
        surname: string;
    };

    interface IUserAuth {
        email:string;
        password: string;
    }

    interface IUser extends IUserAuth{
        readonly id:string;
        name:string;
        surname:string;
    }

    function getUser(): IUser {
        return {
            id: "string",
            email: "string",
            password: "string",
            name: "string",
            surname: "string",
        };
    };

    const user:IUser = {
            id: "fqwdqw", 
            email: "Pabwecwqc@gmail.com",
            password: "acderafasds",
            name: "Pablo",
            surname: "Fernandez",

    }



}) ();