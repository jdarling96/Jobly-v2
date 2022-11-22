import {useState} from "react";

const useLocalStorageState = (key1, key2) => {

    const INITIAL_STATE = {
        token: window.localStorage.getItem(key1) || "",
        user: window.localStorage.getItem(key2) || ""
    }
    
    
    const [state, setState] = useState(INITIAL_STATE)
        


    const setLocalStorage = () => {
        
        window.localStorage.setItem(key1, state.token)
        window.localStorage.setItem(key2, state.user)
    }




const clearLocalStorage = () => {
    localStorage.clear()
            
            
        }
        

    return [state, setState, setLocalStorage, clearLocalStorage]





}

export default useLocalStorageState


