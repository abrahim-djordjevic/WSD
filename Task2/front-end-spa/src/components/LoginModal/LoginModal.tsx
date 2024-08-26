import React, { ReactElement, useState } from "react";
import { Client } from "../../client/client";
import store from "../../store/store";
import { setIsLoggedIn, setUser } from "../../store/slices/UiSlice";


export const LoginModal = ():ReactElement => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const client = new Client();

    const login = async () => {
        client.postLogin(username, password).then((response) => {
            if(response.user !== undefined){
                store.dispatch(setUser(response.user));
                store.dispatch(setIsLoggedIn(true));
            } else {
                alert(response.msg);
            }
        });
    }

    return(
        <div className="modal display-block">
            <section className="modal-main">
                <div className="modal-header">
                    <h1>Login</h1>
                </div>
                <div className="modal-body">
                    <span>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </span>
                    <span>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </span>
                </div>
                <div className="modal-footer">
                    {username !== "" && password !== "" &&
                        <button className='login-btn'
                            onClick={async() => {await login();}}
                            >
                            <div>
                                <p>Login</p>
                            </div>
                        </button>
                    }
                </div>
            </section>
        </div>
    );
}