import React, { ReactElement, useEffect, useState } from "react";
import { Client } from '../client/client';
import '../App.css';
import store, { useAppSelector } from "../store/store";
import { setIsLoggedIn, setUser } from "../store/slices/UiSlice";
import { LoginModal } from "../components/LoginModal/LoginModal";
import { Header } from "../components/Header/Header";
import { GenerateDataButton } from "../components/GenerateDataButton/GenerateDataButton";
import { RaceDataTable } from "../components/RaceDataTable/RaceDataTable";

export const HomePage = ():ReactElement => {
    const client = new Client();
    const isLoggedIn = useAppSelector((state) => state.ui.isLoggedIn);

    const authenticate = async () => {
        const user = sessionStorage.getItem("user");
        if(user !== null){
            client.getUserStatus(user).then((res) => {
                store.dispatch(setUser(res.user));
                store.dispatch(setIsLoggedIn(res.authenticated))
            });
        } else {
            store.dispatch(setIsLoggedIn(sessionStorage.getItem("authenticated") === "true"));
        }
    }
       
    useEffect(() => {
        authenticate();
    },[]);

    return(
        <div className="App">
            <header>
                <Header />
            </header>
            <div>
                <div className="body-container" >
                    {isLoggedIn === false && <LoginModal/>}
                    {isLoggedIn === true && 
                    <div className="body-content">  
                        <div className="generate-data-btn-container">
                            <GenerateDataButton />
                        </div>
                        <div className="race-data-container">
                            <RaceDataTable />
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}