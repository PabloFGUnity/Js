import {
    createContext,
    useState,
    useContext,
    useMemo,
    useCallback
  } from "react";
  
  // aqui creamos la constante que alternaremos mas tarde su valor para que redireccione para las paginas
  const UiModeContext = createContext({
    uiMode: true,
    toggleUiMode: () => {}
  });
  
  export default UiModeContext;

  
  export function UiModeContextProvider({ children }) {
    //aqui declaramos la constante en false
    const [uiMode, setUiMode] = useState(false);
    
    const toggleUiMode = useCallback(() => {
      setUiMode(function (oldUiMode) {
        if (oldUiMode === true) {
          return false;
        } else {
          return true;
        }
      });
    }, []);
  
    const value = useMemo(
      () => ({
        uiMode,
        toggleUiMode
      }),
      [uiMode, toggleUiMode]
    );
  
    return (
      <UiModeContext.Provider value={value}>{children}</UiModeContext.Provider>
    );
  }
  
  export function useUiModeContext() {
    return useContext(UiModeContext);
  }
  