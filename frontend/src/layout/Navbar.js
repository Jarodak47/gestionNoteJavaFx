import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Gestion des notes UY1</a>
            <button 
 
                className="navbar-toggler" 
                type="button" 
                data-bs-theme="dark"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarScroll" 
                aria-controls="navbarScroll" 
                aria-expanded="false" 
                aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="btn btn-outline-light" 
                  to="/EnregistrerAnneeAcademique">Enregister une annee academique
            </Link>
        </div>
        </nav>
        </div>
        
    )
}