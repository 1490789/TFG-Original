import React, {useCallback, useContext, useState} from 'react';
import Context from "../Context/UserContextProvider";

 export default function useUser () {
    const {jwt, setJWT, user, setUser} = useContext(Context);
    const [invalid, setInvalid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

     const login = useCallback((item) => {
         const cargoUtil = JSON.stringify(item);
         setIsLoading(true);
         fetch("http://localhost/IniciaSessio.php",{
             method:"POST",
             headers: {
                 "Content-Type": 'application/json'
             },
             body: cargoUtil
         }).then(res=>{
             return res.json()
         }).then((res)=>{
             if(!res) return setInvalid(true);
             window.sessionStorage.setItem('jwt',res);
             window.sessionStorage.setItem('user',item['usuari']);
             setIsLoading(false);
             setJWT(res);
             setUser(item['usuari']);
         }).catch(err => {
             setIsLoading(false);
             window.sessionStorage.removeItem('jwt');
             window.sessionStorage.removeItem('user');
             })
     }, [setJWT]);

     const logout = useCallback(() => {
         window.sessionStorage.removeItem('jwt');
         window.sessionStorage.removeItem('user');
        setJWT(null);
        setUser(null);
     }, [setJWT, setUser])



     return{
         isLogged: Boolean(jwt),
         isLoading,
         login,
         logout,
         invalid,
         user
     }
 };



