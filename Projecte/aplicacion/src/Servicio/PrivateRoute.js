import React from 'react';
import { Route, Redirect } from 'wouter';

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <div>
        {
            appProps.isLogged ? <Route {...rest} component={C} /> : <Redirect to={'/'}/>
        }
        </div>
    );
}