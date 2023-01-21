import React from "react"
import logo from "./binar.png"
import account from "./acc.png"
import "./navbar.css"

export default function Navbar() {
    return(
        <>
<nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand fontNav" href="#">
                Binar
                <img src={logo} alt="LogoBinar" width="30" height="28" className="d-inline-block align-text-top me-1 ms-1"/>
                Games
                </a>
            </div>
        </nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active fontNav2 me-2" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active fontNav2 me-2" aria-current="page" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active fontNav2" aria-current="page" href="/leaderboard">Leaderboard</a>
                </li>
            </ul>
            <div className="d-flex">
                <button className="btn btn-outline-dark me-3" type="submit">
                    <img src={account} alt="login" width="30" height="24" className="d-inline-block align-text-top " />
                Login
                </button>
            </div>
        </div>
    </div>
</nav>
        </>
    )
}