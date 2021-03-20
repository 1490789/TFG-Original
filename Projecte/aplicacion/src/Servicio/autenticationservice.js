import React, {useState, useContext} from 'react';
import {BehaviorSubject} from 'rxjs';
import Context from "../Context/UserContextProvider";

 const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

 export const autenticationService = {
     login,
     logout,
     currentUser: currentUserSubject.asObservable(),
     get currentUserValue () { return currentUserSubject.value }
 };

     function login(item){
         const cargoUtil = JSON.stringify(item);
         alert(cargoUtil);
         fetch("http://localhost/IniciaSessio.php",{
             method:"POST",
             headers: {
                 "Content-Type": 'application/json'
             },
             body: cargoUtil
         }).then(res=>res.json()
         ).then((res)=>{
             localStorage.setItem('currentUser', JSON.stringify(res));
             currentUserSubject.next(res);
         return res}
     ).catch(err => alert(err))};

     function logout(){
         currentUserSubject.next(null);
         localStorage.removeItem('currentUser')
     }