import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {DataContext, DataContextProvider} from "./context/ItemDataContext";
import {AuthContext, AuthContextProvider} from "./context/AuthContext";
export {
    DataContext,
    AuthContext
};

// Call make Server
makeServer();

ReactDOM.render (
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <DataContextProvider>
                    <App/>
                </DataContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
