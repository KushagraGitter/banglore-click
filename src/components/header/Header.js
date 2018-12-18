import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css';
const Header =()=>{
    return(
        <div className="header">
        <img className="headerLogo" src="https://firebasestorage.googleapis.com/v0/b/bangloreclicks.appspot.com/o/logo%2FBANGALORE%20CLICKS%20trans%20for%20WHITE.png?alt=media&token=1496da4e-8d19-4bf9-b694-d387d090d7a7"></img>
           
            <Nav className="headerNav">
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