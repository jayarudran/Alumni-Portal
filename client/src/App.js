import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Community from "./components/pages/Community";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/pages/Profile";
import Feed from "./components/pages/Feed";
import Messages from "./components/pages/Messages";
import Bookmarks from "./components/pages/Bookmarks";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import NotFound from "./components/pages/NotFound";
import AdminPage from "./components/admin/AdminPage";
import OtherProfile from "./components/pages/OtherProfile";
import RandomPost from "./components/pages/RandomPost";
import PrivateRoute from "./components/PrivateRoute";
import Post from "./components/Post";
import { useAuth } from "./context/AuthContext";
import LoadingBar from 'react-top-loading-bar'

import Verified from "./components/Verified";
import VerifyAgain from "./components/auth/VerifyAgain";

const App = () => {
    const auth = useAuth();
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const Progress = (progress) => {
        setProgress(progress);
    }

    return (
        <React.Fragment>
            <LoadingBar color='#f11946' progress={progress} />
            <Switch>
                {/* Private Routes */}
                <PrivateRoute Progress={Progress} exact path={"/"} component={Feed}></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    path="/community"
                    component={Community}
                ></PrivateRoute>
                <PrivateRoute Progress={Progress} path="/chat" component={Messages}></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    exact
                    path="/profile"
                    component={Profile}
                ></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    path="/saved"
                    component={Bookmarks}
                ></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    exact
                    path="/profile/:username"
                    component={OtherProfile}
                ></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    exact
                    path="/post/:postid"
                    component={RandomPost}
                ></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    path="/admin"
                    component={AdminPage}
                ></PrivateRoute>
                <PrivateRoute
                    Progress={Progress}
                    path="/post/:postid"
                    component={Post}
                ></PrivateRoute>
                {/* Public routes */}
                <Route
                    Progress={Progress}
                    path="/forgotpassword"
                    component={ForgotPassword}
                ></Route>
                <Route
                    Progress={Progress}
                    path="/resetpassword/:token"
                    component={ResetPassword}
                ></Route>
                <Route Progress={Progress} path="/register" component={Register}></Route>
                <Route Progress={Progress} path="/login" component={Login}></Route>
                <Route Progress={Progress} path="/verifyemail/:token" component={Verified}></Route>
                <Route Progress={Progress} path="/verifyagain" component={VerifyAgain}></Route>
                <Route Progress={Progress} path="*" component={NotFound} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
