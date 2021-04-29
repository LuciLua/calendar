import { createContext, ReactNode, useContext, useState } from "react";

type Usuario = {
    username: string;
    idade: string;
    hobbie_principal: string;
    hobbie_secundario: string;
}


type UserContextData={
    usuarioList: Usuario[];
}

type UserContextProviderProps = {
    children: ReactNode;
}


export const UserContext = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps){

    const [usuarioList] = useState([]);


    return(
        <UserContext.Provider value={{
            usuarioList,

        }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    return useContext(UserContext);
}