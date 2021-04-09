import React, { Component } from 'react';
import { Nav, NavItem } from "reactstrap";
import { NavLink, Switch, Route, Redirect  } from 'react-router-dom';
import Documents from "../Body/Documents";
import Home from "../Body/Home";
import Laws from "../Body/Home/Laws";

class Header extends Component {
    renderMenu() {
        return (
            <div className="row justify-content-center">
                <Nav tabs>
                    <NavItem className="nav-item">
                        <NavLink to="/home" exact className="nav-link" activeStyle={{backgroundColor: "black", color: "white", textDecoration: "none"}}>Что защищаем?</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/laws" exact className="nav-link" activeStyle={{backgroundColor: "black", color: "white", textDecoration: "none"}}>Законы</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink to="/documents" exact className="nav-link" activeStyle={{backgroundColor: "black", color: "white", textDecoration: "none"}}>Документы</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.renderMenu()}
                <Switch>
                    <Route exact path='/home/' component={Home} />
                    <Route exact path='/documents' component={Documents} />
                    <Route exact path='/laws' component={Laws}/>
                    <Redirect to='/home' />
                </Switch>
            </>
        );
    }
}

export default Header;