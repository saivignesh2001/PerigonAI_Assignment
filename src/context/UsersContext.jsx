import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UsersContext = createContext();
export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    
    

    useEffect(() => {
        let getUsers=async ()=>{
            let response =await axios.get('https://jsonplaceholder.typicode.com/users')
            response=response.data;
            console.log(response);
            setUsers(response);
        }
        getUsers();



    }, []);
    const updateRegisterInfo = (info) => {
        console.log(info);
        setRegisterInfo(info);
    }
    const logoutUser = () => {
        localStorage.removeItem("User")
        setUser(null);
    }


    return (<UsersContext.Provider value={{ users,setUsers }}>{children}</UsersContext.Provider>)
}