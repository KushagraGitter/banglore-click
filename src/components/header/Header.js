import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css';
const Header =()=>{
    return(
        <div className="header">
            <div className="headerTitle">Banglore Clicks</div>
            <Nav>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Contect</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Header