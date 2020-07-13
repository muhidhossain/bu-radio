import React, { useState } from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import logo from '../../images/bu radio background rectangle.png';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, makeStyles, Hidden, Drawer, useTheme, Divider, List, ListItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import FullHeight from "react-full-height";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
    },
    logo1: {
        height: '30px',
        margin: '20px',
    },
}));

const Navbar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <FullHeight style={{ backgroundColor: "#3b3bfc", color: "white" }} className="section-styles">
            <div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <img className={classes.logo1} src={logo} alt="" />
                    <FontAwesomeIcon style={{fontSize: "25px", marginRight: "20px"}} icon={faDownload} />
                </div>
                <div />
                <Divider />
                <List className="drawer-btn">
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>HOME</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>SERVICES</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>PORTFOLIO</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>PRICING</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>ABOUT</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>TEAM</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none" }} href="/about">
                        <ListItem button>
                            <p>CONTACT</p>
                        </ListItem>
                    </a>
                </List>
            </div>
        </FullHeight>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

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
                <IconButton
                    style={{ outline: "none" }}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon className="navDrawer" style={{ fontSize: "35px", color: "white" }} />
                </IconButton>
            </div>
            <nav className={classes.drawer} aria-label="manu-options">
                <Hidden smUp implementation="css">
                    <div>
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{ paper: classes.drawPaper }}
                            ModalProps={{ keepMounted: true }}
                        >
                            {drawer}
                        </Drawer>
                    </div>
                </Hidden>
            </nav>
        </div>
    );
};

export default Navbar;