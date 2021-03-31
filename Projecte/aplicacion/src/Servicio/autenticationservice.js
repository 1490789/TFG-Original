import React, {useCallback, useContext, useState} from 'react';
import Context from "../Context/UserContextProvider";

 export default function useUser () {
    const {jwt, setJWT, user, setUser} = useContext(Context);
    const [invalid, setInvalid] = useState(false);

     const login = useCallback((item) => {
         const cargoUtil = JSON.stringify(item);
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
             setJWT(res);
             setUser(item['usuari']);
         }).catch(err => {
             window.sessionStorage.removeItem('jwt');
             window.sessionStorage.removeItem('user');
             alert(err)})
     }, [setJWT]);

     const logout = useCallback(() => {
         window.sessionStorage.removeItem('jwt');
         window.sessionStorage.removeItem('user');
        setJWT(null);
        setUser(null);
     }, [setJWT, setUser])

     const foundname = useCallback(() => {
         const cargoUtil = JSON.stringify(jwt);
         fetch("http://localhost/foundname.php",{
             method:"POST",
             headers: {
                 "Content-Type": 'application/json'
             },
             body: cargoUtil
         }).then(res=>{
             if(!res.ok) throw new Error('Response is NOT ok')
             return res.json()
         }).then((res)=>{
             setUser(res);
         }).catch(err => {
             alert(err)})
     });

     return{
         isLogged: Boolean(jwt),
         login,
         logout,
         foundname,
         invalid,
         user
     }
 };



