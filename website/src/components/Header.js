import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../static/Logo.png'


class Header extends React.Component {

    state = {
        selected: 'home'
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
                selected='home'
                break
        }
        this.setState({ selected: selected })
    }


    render() {
        return (
            <>
                <Navbar bg="light" style={{ width: "100%", height: "15vh", zIndex: "10", position: "fixed" }}>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            height="100"
                            className="d-inline-block align-top"
                            alt="Utah Student Robotics logo"
                        />
                    </Navbar.Brand>
                    <Nav
                        className="ml-auto header-nav"
                        variant="pills"
                        activeKey="/home"
                        style={{ marginRight: "50px" }}
                        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item className={this.state.selected === 'home' ? "active" : null}>
                            <Link to="/" onClick={() => this.setState({ selected: 'home' })}>Home</Link>
                        </Nav.Item>
                        <Nav.Item className={this.state.selected === 'about' ? "active" : null}>
                            <Link to="/about" onClick={() => this.setState({ selected: 'about' })}>About</Link>
                        </Nav.Item>
                        <Nav.Item className={this.state.selected === 'sponsors' ? "active" : null}>
                            <Link to="/sponsors" onClick={() => this.setState({ selected: 'sponsors' })}>Sponsors</Link>
                        </Nav.Item>
                        <Nav.Item className={this.state.selected === 'contact' ? "active" : null}>
                            <Link to="/contact" onClick={() => this.setState({ selected: 'contact' })}>Contact Us</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                <div style={{ height: "15vh" }}></div>
            </>
        )
    }
}

export default Header