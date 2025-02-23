import { createContext,useState } from "react";
import { login } from "./serviceUser";

export const UserContext = createContext();

export function UserProvider({children}){


    const [user, setUser] = useState(null);

    
    const handleLogin = async (loginRequest) => {

        try{

            let data = await login(loginRequest);

            if(data.success){
                setUser(data.body);
            }

        }catch(err){
            alert(err);
        }

    }

    const contextValue = {
        user,
        handleLogin
    }

    return(

        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}