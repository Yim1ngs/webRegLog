import React from "react";

export default function Home({username , onLogOut}){
    return(
        <div className="welcome-container">
            <h2 className="welcome-message">Hello,{username}!</h2>
            <button onClick={onLogOut} className="logout-button">Logout</button>
        </div>

    );
}