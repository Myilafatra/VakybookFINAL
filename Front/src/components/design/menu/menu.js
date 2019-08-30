import React, { Component } from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Menu extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        collapseID: "",
        redirect: false
    }
    toggleCollapse = collapseID => () => this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    toggle = nr => () => {
        let modalNumber = "modal" + nr; this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        return (
            <div>
                <MDBNavbar dark expand="md" id="navbar" >
                    <MDBNavbarBrand>
                        <div id="contentlogo"><img height="90px" src="./image/logoB1.png" alt="logo" id="logo" /></div>
                        
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav right>
                            <li class="nav-item">
                                <Link to="/"><span id="font" >Acceuil</span></Link> <span class="sr-only">(current)</span>
                            </li>
                            <li class="nav-item">
                                <Link to="/tousLesAteliers"><span id="font" >Livres</span></Link> <span class="sr-only">(current)</span>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><span id="font" >Catégories</span></Link> <span class="sr-only">(current)</span>
                            </li>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <li class="nav-item">
                                {/* <Link to="/login" id="font"className="nav-header" rounded onClick={this.toggle(1)}>Connexion</span></Link> <span class="sr-only">(current)</span> */}
                                <Link to="/login" id="font"className="nav-header" rounded onClick={this.toggle(1)}>Connexion</Link>
                            </li>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}