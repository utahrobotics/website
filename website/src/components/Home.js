import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../static/Logo.png'
import Gears from '../static/gears.gif'
import RobotsImg from '../static/robots.jpg'
import Robot from '../static/main.jpg'
import Working from '../static/working.jpg'
import { Parallax } from 'react-parallax';


class Home extends React.Component {

    state = {
        darkenShow: "",
        centerShow: ""
    }

    componentDidMount() {
        console.log(this.refs.jtron)
        setTimeout(() => {
            this.setState({
                darkenShow: " show"
            })

            setTimeout(() => {
                this.setState({
                    centerShow: " show"
                })
            }, 600)
        }, 400)


    }

    render() {
        return (
            <div className="page">
                <div className="blur">
                    <Jumbotron fluid={true} className="jumbo" style={{ backgroundImage: `url(${Gears})` }}>
                        <div className={"darken" + this.state.darkenShow} key="dfgsdf">
                            YEEEEEt
                        </div>
                    </Jumbotron>
                </div>
                <div className="center-container">
                    <div className={"jumbo-center" + this.state.centerShow}>
                        <img
                            src={Logo}
                            height="300px"
                            alt="React Bootstrap logo"
                        />
                        <h1>Utah Student Robotics</h1>
                    </div>
                </div>
                <div className="info-section">
                    <h1>Who We <em>Are</em></h1>
                    <h4>
                        We are the University of Utah's own robotics team.
                        The team began as a couple of students in the mining department
                        wanting to compete in NASA's annual Robotic Mining Competition and
                        has since flourished into the multi-disciplinary club that it is today,
                        combining electrical, mechanical, computer, and mining expertise.
                    </h4>
                </div>
                <Parallax
                    blur = {{min:-5, max:10}}
                    bgImage={RobotsImg}
                    bgImageAlt="outreach"
                    strength={600}
                >
                    <div style={{ height: '800px' }} />
                </Parallax>
                <div className="info-section">
                    <h1>What We <em>Do</em></h1>
                    <h4>
                        Every year the team works hard to build a robot for
                        NASA's Lunabotics Competition (formerly called The Robotic Mining Competition).
                        We design a robot from the ground up taking into consideration
                        power, autonomy, mechanical loads, and lots more. At the end of the
                        year we go to Florida to compete against 50 other universities. The club
                        offers students an opportunity to learn new aspects of engineering
                        and to apply what they've learned in classes.
                    </h4>
                </div>
                <Parallax
                    blur = {{min:-5, max:10}}
                    bgImage={Robot}
                    bgImageAlt="robot"
                    strength={600}
                >
                    <div style={{ height: '800px' }} />
                </Parallax>
                <div className="info-section">
                    <h1>How <em>You</em> Can Help</h1>
                    <h4>
                        Want to join? Great! It's completely free to join, you just
                        need to be a U of U student. Come be a part of real engineering
                        decisions and learn what it takes to build a space-ready robot. Go ahead and send us
                        an email or look for us at campus events and we'll let you know 
                        when our next meeting is.
                    </h4>
                </div>
                <Parallax
                    blur = {{min:-5, max:10}}
                    bgImage={Working}
                    bgImageAlt="team"
                    strength={600}
                >
                    <div style={{ height: '800px' }} />
                </Parallax>
                <div className="info-section">
                    <h1>Who we <em>are</em></h1>
                    <h4>
                        We are the University of Utah's own robotics team.
                        The team began as a couple of students in the minging department
                        wanting to compete in NASA's annual Robotic Mining Competition and
                        has since flourished into the multi-disciplinary club that it is today,
                        combining electrical, mechanical, computer, and mining expertise.
                    </h4>
                </div>
            </div>
        )
    }
}

export default Home