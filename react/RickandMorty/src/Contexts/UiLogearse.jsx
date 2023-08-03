    import {
    createContext,
    useState,
    useContext,
    
  } from "react";

const UiLogearseContext = createContext({
    user:null,
    errorMessage:null,
    login: () => {},
    logout: () => {}
  });


const RICK_AND_MORTY="RICK_AND_MORTY";

export default function LogContextProvider({children})
{
    const [user, setUser] = useState(localStorage.getItem(RICK_AND_MORTY) ?? null);
    const [errorMessage, setErrorMessage] = useState(null);

    function login ({email,password}){
            if (email === "@email.com" && password === "1234"){
                setUser({email})
                localStorage.setItem(RICK_AND_MORTY,email)
                setErrorMessage(null);
            }   else{
                setErrorMessage("Email o password incorrectos")
            }
    }

    function logout() {

        setUser(null);
    }

    const value= {
        user,
        errorMessage,
        login,
        logout
    };

    return <UiLogearseContext.Provider value={value}>{children}</UiLogearseContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLogearseContext(){
    return useContext(UiLogearseContext)
}