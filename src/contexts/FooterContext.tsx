import { createContext, ReactNode, useContext, useState } from 'react';


type FooterContextData ={
    toggleList: () => void;
    isDisplay: boolean;    
    setListState: (state: boolean) => void;

    toggleColor: () => void;
    isColor: boolean;
    setColorState: (state: boolean) => void;
}

type FooterContextProviderProps = {
    children: ReactNode
}

export const FooterContext =createContext({} as FooterContextData);
export function FooterContextProvider({ children }: FooterContextProviderProps){

    const [isDisplay, setIsList] = useState(false)
    const [isColor, setIsColor] = useState(false)

    function toggleList(){
        setIsList(!isDisplay)
    }

    function setListState(state: boolean){
        setIsList(state)
    }

    function setColorState(state: boolean){
        setIsColor(state)
    }

    function toggleColor(){
        setIsColor(!isColor)
    }

    return(
        <FooterContext.Provider value={{
            toggleList,
            isDisplay,
            setListState,
            
            setColorState,
            isColor,
            toggleColor,
        }}>
            {children}
        </FooterContext.Provider>
    )
};

export const useFooter = () => {
    return useContext(FooterContext);
}