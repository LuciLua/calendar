import { createContext, ReactNode, useContext } from 'react';


type FooterContextData ={
    
}

type FooterContextProviderProps = {
    children: ReactNode
}

export const FooterContext =createContext({} as FooterContextData);
export function FooterContextProvider({ children }: FooterContextProviderProps){

    return(
        <FooterContext.Provider value={{}}>
            {children}
        </FooterContext.Provider>
    )
};

export const useFooter = () => {
    return useContext(FooterContext);
}