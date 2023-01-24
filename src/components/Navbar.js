import React from "react"
import pageLogo from "../img/pro-controller.png"

export default function Navbar() {
	return(
        <nav>
            <img src={pageLogo} alt="Page Logo" className="nav-logo"/>
            <h2>GameStore</h2>
        </nav>
    )
}