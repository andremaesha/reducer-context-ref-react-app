import React, { Fragment, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
// import Coba from "./Coba";
import AuthContext from "./store/auth-context";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
            {/* <Coba /> */}
        </Fragment>
    );
}

export default App;
