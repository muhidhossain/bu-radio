import React from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import logo from '../../images/bu radio background rectangle.png';
import Button from '@material-ui/core/Button';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Nav className="justify-content-center navItems" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link>
                            <img className="logo" src={logo} alt="" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">PORTFOLIO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">PRICING</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">TEAM</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink">CONTACT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button className="navButton">Download</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default Navbar;