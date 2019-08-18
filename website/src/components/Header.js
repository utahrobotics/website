import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../static/Logo.png'


class Header extends React.Component {

    constructor(props) {
        super(props)

        this.menuRef = React.createRef()
        this.compRef = React.createRef()
        this.state = {
            selected: 'home'
        }
    }



    componentDidMount() {
        let selected = ''
        switch (this.props.location.pathname) {
            case '/':
                selected = 'home'
                break
            case '/about':
                selected = 'about'
                break
            case '/sponsors':
                selected = 'sponsors'
                break
            case '/contact':
                selected = 'contact'
                break
            default:
                selected = 'home'
                break
        }
        this.setState({ selected: selected })
        this.changeMenuPadding()
        window.addEventListener("resize", this.changeMenuPadding)
    }

    changeMenuPadding() {
        if (getComputedStyle(document.getElementsByClassName("navbar-toggler").item(0)).display !== "none") {
            document.getElementsByClassName("navbar-nav").item(0).style["padding-top"] = "50px"
        }
        else {
            document.getElementsByClassName("navbar-nav").item(0).style["padding-top"] = "0px"
        }
    }

    render() {
        console.log(window.location)
        return (
            <>
                <Navbar.Brand href="/" className="brand">
                    <img
                        src={Logo}
                        height="100"
                        className="d-inline-block align-top"
                        alt="Utah Student Robotics logo"
                    />
                </Navbar.Brand>
                <Navbar bg="light" variant="light" expand="lg" style={{ width: "100%", zIndex: "10", position: "fixed" }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                        <Nav
                            className="ml-auto"
                            activeKey="/home"
                            ref={this.compRef}
                        >
                            <Nav.Link href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/about">
                                About
                            </Nav.Link>
                            <Nav.Link href="/sponsors">
                                Sponsors
                            </Nav.Link>
                            <Nav.Link href="/resources">
                                Resources
                            </Nav.Link>
                            <Nav.Link href="/contact">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {window.location.pathname === "/" ? null : <div style={{ height: "15vh" }}></div>}
            </>
        )
    }
}

export default Header