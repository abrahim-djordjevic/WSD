import { ReactElement } from "react";
import { Client } from "../../client/client";
import { setIsLoggedIn } from "../../store/slices/UiSlice";
import store, { useAppSelector } from "../../store/store";

export const Header = ():ReactElement => {
    const client = new Client();
    const user = useAppSelector((state) => state.ui.user);
    const isLoggedIn = useAppSelector((state) => state.ui.isLoggedIn);

    return(
        <div className="header">
            <div className="title-container">
                <h1>Web Scraping App for WSD</h1>
            </div>
            {isLoggedIn &&<div className="user-details">
                <div>{user}</div>
                <button
                    className="log-out-btn"
                    onClick={async() => {
                        await client.postLogout();
                        store.dispatch(setIsLoggedIn(false))
                    }}
                >
                    Logout
                </button>
            </div>}
        </div>
    );
}