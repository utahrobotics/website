import React from 'react'
import Team from '../static/team_transparent.png'
import Rover from '../static/rover.png'
import Rover2 from '../static/rover2.png'
import Rover3 from '../static/rover3.png'
import Rover4 from '../static/rover4.png'
import { Spring, config } from 'react-spring/renderprops'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.rover1ref = React.createRef()
        this.rover2ref = React.createRef()
        this.rover3ref = React.createRef()
        this.rover4ref = React.createRef()

        this.handleScroll = this.handleScroll.bind(this)
    }

    state = {
        team: false,
        showRover1: false,
        showRover2: false,
        showRover3: false,
        showRover4: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ team: !this.state.team })
        //console.log(this.rover1ref.current.offsetTop - 50)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        console.log(evt)
        console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        this.changeOnScroll(evt, "showRover1", this.rover1ref.current.offsetTop - 700)
        this.changeOnScroll(evt, "showRover2", this.rover2ref.current.offsetTop - 700)
        this.changeOnScroll(evt, "showRover3", this.rover3ref.current.offsetTop - 700)
        this.changeOnScroll(evt, "showRover4", this.rover4ref.current.offsetTop - 700)
    }

    changeOnScroll(evt, stateVar, scrollHeight) {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        if (scrollPos > scrollHeight) {
            if (this.state[stateVar] === false)
                this.setState({ [stateVar]: true })
        }
        else {
            if (this.state[stateVar] === true)
                this.setState({ [stateVar]: false })
        }
    }

    render() {
        return (
            <div className="page">
                <div className="about-section">
                    <h1>We Are Utah Student Robotics</h1>
                    <Spring
                        from={{
                            opacity: 0,
                            rotation: '90deg',
                        }}
                        to={{
                            opacity: this.state.team ? 1 : 0,
                            rotation: this.state.team ? '0deg' : '90deg',
                        }}
                        config={config.molasses}>
                        {props => <img src={Team} alt="team" style={{
                            width: "70%",
                            opacity: props.opacity,
                        }} />}
                    </Spring>
                    <h5>We are a student-lead and student-organized club, whose goal is to enhance members' understanding of robotics and provide practical engineering experience. Each year we compete in the NASA Robotic Mining Competition. Our efforts throughout the year culminate into one large complex robot. The Robot's sole purpose is off-world mining. A lot of research, design, assembly is provided by the team to support that purpose. Each robot we build is unique and thought must be put into how it will move, dig, automate, be powered, be shaped, etc.. The club is free to join and you may get a chance to come to Florida with select members of the team to represent our university in front of NASA scientists and heads of industry.</h5>
                </div>

                <div className="robot-section">
                    <h1>Our Robots</h1>
                    <h2>Name TBD (But probably Truely Heartwarming Rover of Orbital Celestial Kinetic Motion Operating Relatively Tactfully Or Not, a.k.a THROCKMORTON)</h2>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(-200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showRover1 ? 1 : 0,
                            transform: this.state.showRover1 ? 'translate3d(0px,0,0)' : 'translate3d(-200px,0,0)',
                        }}
                        config={config.wobbly}>
                        {props => <img ref={this.rover1ref} key="rover" className="rover" src={Rover} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>
                        Our newest robot will be competing in the 2020 competition and has many exciting features. The mobility system is a rocker-bogie mechanism, the same kind that the Curiosity Rover uses.
                        The digging, storage, and release of mined material is all handled by a bucket drum design inspired by the RASSOR robot. This design will also use some advanced computing
                        to aid in the competition. A convolution neural net is used to analyze the sounds of the digging mechanism to determine what material is being mined, and an array of gyroscopes,
                        accelorometers, cameras, IMU's, ultra-wideband sensors and more is used to achieve autonomy.
                    </h5>
                </div>
                <div className="robot-section">
                    <h2>Sandcrawler</h2>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showRover2 ? 1 : 0,
                            transform: this.state.showRover2 ? 'translate3d(0px,0,0)' : 'translate3d(200px,0,0)',
                        }}
                        config={config.wobbly}>
                        {props => <img ref={this.rover2ref} key="rover" className="rover" src={Rover2} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
                </div>
                <div className="robot-section">
                    <h2>Autonomous Martian Environment Excavator, a.k.a AMEE</h2>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(-200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showRover3 ? 1 : 0,
                            transform: this.state.showRover3 ? 'translate3d(0px,0,0)' : 'translate3d(-200px,0,0)',
                        }}
                        config={config.wobbly}>
                        {props => <img ref={this.rover3ref} key="rover" className="rover" src={Rover3} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
                </div>
                <div className="robot-section">
                    <h2>Master Chief</h2>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showRover4 ? 1 : 0,
                            transform: this.state.showRover4 ? 'translate3d(0px,0,0)' : 'translate3d(200px,0,0)',
                        }}
                        config={config.wobbly}>
                        {props => <img ref={this.rover4ref} key="rover" className="rover" src={Rover4} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
                </div>
            </div>
        )
    }
}

export default About