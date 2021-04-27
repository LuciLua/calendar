import { createContext, ReactNode, useContext, useState } from 'react';


type FooterContextData ={
    toggleList: () => void;
    isDisplay: boolean;    
    setListState: (state: boolean) => void;
}

type FooterContextProviderProps = {
    children: ReactNode
}

export const FooterContext =createContext({} as FooterContextData);
export function FooterContextProvider({ children }: FooterContextProviderProps){

    const [isDisplay, setIsList] = useState(false)

    function toggleList(){
        setIsList(!isDisplay)
    }

    function setListState(state: boolean){
        setIsList(state)
    }

    return(
        <FooterContext.Provider value={{
            toggleList,
            isDisplay,
            setListState            
        }}>
            {children}
        </FooterContext.Provider>
    )
};

export const useFooter = () => {
    return useContext(FooterContext);
}