import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../static/Logo.png'
import { Spring, config } from 'react-spring/renderprops'

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this)
        this.menuRef = React.createRef()
        this.compRef = React.createRef()
        this.state = {
            selected: 'home',
            logoHeight: "100"
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
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        if (scrollPos > 30 && this.state.logoHeight === "100") {
            this.setState({ logoHeight: "35" })
        }
        else if (scrollPos < 30 && this.state.logoHeight === "35") {
            this.setState({ logoHeight: "100" })
        }
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
                <Spring
                    from={{
                        height: "100"
                    }}
                    to={{
                        height: this.state.logoHeight === "35" ? "35" : "100"
                    }}
                    config={config.stiff}>
                    {props =>
                        <Navbar.Brand href="/" className="brand">
                            <img
                                src={Logo}
                                height={props.height}
                                className="d-inline-block align-top"
                                alt="Utah Student Robotics logo"
                            />
                        </Navbar.Brand>}
                </Spring>
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
                            <NavDropdown title="Online Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/courses/k4">Grades K-4</NavDropdown.Item>
                                <NavDropdown.Item href="/courses/58">Grades 5-8</NavDropdown.Item>
                                <NavDropdown.Item href="/courses/912">Grades 9-12</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
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