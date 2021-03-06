import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../redux/actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../redux/actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const initialStateChecking = true;
    const [checking, setChecking] = useState(initialStateChecking);

    const initialStateLoggedIn = false;
    const [isLoggedIn, setIsLoggedIn] = useState(initialStateLoggedIn);

    useEffect(() => {

        firebase.auth().onAuthStateChanged(async(user) => {

            if(user?.uid) {

                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
                

            } else {

                setIsLoggedIn(false);

            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ]);

    if(checking) {
        return (
            <h1>Wait...</h1>
            // <LoadingScreen/>
        );
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRoute 
                        exact
                        path="/" 
                        component={ JournalScreen }
                        isAuthenticated={ isLoggedIn }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    );

};

/* *** SIN RUTAS PRIVADAS *** */
// return (
    //     <Router>
    //         <div>
    //             <Switch>

    //                 <Route 
    //                     path="/auth"
    //                     component={ AuthRouter }
    //                 />

    //                 <Route 
    //                     exact 
    //                     path="/"
    //                     component={ JournalScreen }
    //                 />

    //                 <Redirect to="/auth/login"/>

    //             </Switch>
    //         </div>
    //     </Router>
    // );
