    import {
    createContext,
    useState,
    useContext,
    
  } from "react";



const UiLogearseContext = createContext({
    user:null,
    errorMessage:null,
    loginBasic: () => {},
    loginAdvanced: () => {},
    logout: () => {}
  });


const RICK_AND_MORTY="RICK_AND_MORTY";

export default function LogContextProvider({children})
{
    const [user, setUser] = useState(localStorage.getItem(RICK_AND_MORTY) ?? null);
    const [errorMessage, setErrorMessage] = useState(null);

    function loginBasic (values){
            if (values.email === "pablo@email.com" && values.password === "x"){
                setUser(values.email)
                localStorage.setItem(RICK_AND_MORTY,values.email)
                setErrorMessage(null);
            }   else{
                setErrorMessage("Email o password incorrectos")
            }
    }

    function loginAdvanced (values){
        if (values.username === "Pablo" && values.jobType === "developer" && values.acceptedTC === true){
            setUser(values.email)
            localStorage.setItem(RICK_AND_MORTY,values.email)
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
        loginBasic,
        loginAdvanced,
        logout
    };

    return <UiLogearseContext.Provider value={value}>{children}</UiLogearseContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLogearseContext(){
    return useContext(UiLogearseContext)
}