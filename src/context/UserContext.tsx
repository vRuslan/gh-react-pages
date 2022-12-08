import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

const UserContext = createContext<boolean>(null!);
const UserSetContext = createContext<Dispatch<SetStateAction<boolean>>>(null!);

const UserProvider: FC<{ children?: ReactNode }> = ({children}) => {
    const [user, setUser] = useState(false);
    return (
        <UserContext.Provider value={user}>
            <UserSetContext.Provider value={setUser}>
                {children}
            </UserSetContext.Provider>
        </UserContext.Provider>
    );
}


export {UserContext,UserSetContext, UserProvider};
