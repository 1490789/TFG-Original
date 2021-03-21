import React, {useCallback, useContext, useState} from 'react';
import Context from "../Context/UserContextProvider";

 export default function useUser () {
    const {jwt, setJWT} = useContext(Context);
    const [user, setUser] = useState('');
     const login = useCallback((item) => {
         const cargoUtil = JSON.stringify(item);
         alert(cargoUtil);
         fetch("http://localhost/IniciaSessio.php",{
             method:"POST",
             headers: {
                 "Content-Type": 'application/json'
             },
             body: cargoUtil
         }).then(res=>{
             if(!res.ok) throw new Error('Response is NOT ok')
             return res.json()
         }).then((res)=>{
             window.sessionStorage.setItem('jwt',res);
             setJWT(res)
         }).catch(err => {
             window.sessionStorage.removeItem('jwt');
             alert(err)})
     }, [setJWT]);

     const logout = useCallback(() => {
         window.sessionStorage.removeItem('jwt');
        setJWT(null);
        setUser(null);
     }, [setJWT])

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
         user
     }
 };



