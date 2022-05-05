import { createContext, useEffect, useState } from 'react';


const LoginContext = createContext();

const UserProvider = ({ children }) => {
    const [JWT, setJWT] = useState(window.localStorage.getItem("AllComicsJWT"));
    const [Loged, setLoged] = useState(window.localStorage.getItem("AllComicsJWT")?true:false);
    useEffect(() => {
        if(JWT){
            setLoged(true);
        }
    }, []);

    const setSesion = (jwt)=> {
        setJWT(jwt);
        setLoged(true);
        window.localStorage.setItem("AllComicsJWT",jwt);
    };

    const closeSesion = () => {
        setJWT(null);
        setLoged(false);
        window.localStorage.removeItem("AllComicsJWT");
    }

    const UpdateJWT = (jwt)=> {
        window.localStorage.clear();
        window.localStorage.setItem("jAllComicsJWT",jwt);
    }

    const data = { JWT, Loged, setSesion, closeSesion, UpdateJWT}
    return (<LoginContext.Provider value={data}>{children}</LoginContext.Provider>);
}
export { UserProvider };
export default LoginContext;