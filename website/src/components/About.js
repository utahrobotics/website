import React from 'react'
import Team from '../static/team.png'
import Rover from '../static/rover.png'
import Rover2 from '../static/rover2.png'
import Rover3 from '../static/rover3.png'
import Rover4 from '../static/rover4.png'
import ThrockAnim from '../static/final.mp4'
import { Spring, config } from 'react-spring/renderprops'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.rover1ref = React.createRef()
        this.rover2ref = React.createRef()
        this.rover3ref = React.createRef()
        this.rover4ref = React.createRef()
        this.videoRef = React.createRef()

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
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;
        var windowBottom = w.scrollY + y;
        var vidBottom = this.videoRef.current.offsetTop + this.videoRef.current.offsetHeight;
        console.log(windowBottom + ", " + vidBottom)
        if (windowBottom > vidBottom) {
            this.videoRef.current.play()
        }


        // console.log(evt)
        // console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        this.changeOnScroll(evt, "showRover1", this.rover1ref.current.offsetTop + this.rover1ref.current.offsetHeight)
        this.changeOnScroll(evt, "showRover2", this.rover2ref.current.offsetTop + this.rover2ref.current.offsetHeight)
        this.changeOnScroll(evt, "showRover3", this.rover3ref.current.offsetTop + this.rover3ref.current.offsetHeight)
        this.changeOnScroll(evt, "showRover4", this.rover4ref.current.offsetTop + this.rover4ref.current.offsetHeight)
    }

    changeOnScroll(evt, stateVar, bottomHeight) {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;
        var windowBottom = w.scrollY + y;
        if (windowBottom > bottomHeight) {
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
                    <h1 style={{ fontSize: 50 }}>We Are Utah Student Robotics</h1>
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
                    <h2>Name TBD (But probably not Truely Heartwarming Rover of Orbital Celestial Kinetic Motion Operating Relatively Tactfully Or Not, a.k.a THROCKMORTON)</h2>
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
                        Our newest robot will be competing in the 2021 competition and has many exciting features. The mobility system is a rocker-bogie mechanism, the same kind that the Curiosity Rover uses.
                        The digging, storage, and release of mined material is all handled by a bucket drum design inspired by the RASSOR robot. This design will also use some advanced computing
                        to aid in the competition. A convolution neural net is used to analyze the sounds of the digging mechanism to determine what material is being mined, and an array of gyroscopes,
                        accelorometers, cameras, IMU's, ultra-wideband sensors and more is used to achieve autonomy.
                    </h5>
                    <h2>Check out an animation of our newest robot</h2>
                    <video width="100%" controls ref={this.videoRef} muted>
                        <source src={ThrockAnim} type="video/mp4"></source>
                                        Your browser does not support the video tag.
                    </video>
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
                    <h5>The Sandcrawler is called that because it resembles the jawa-piloted sandcrawlers from Tatooine in StarWars. It features a bucket ladder digging system, a conveyor belt for storage and dumping, and an Nvidia Jetson TX2 for its computer. This robot also claimed third place overall and an award for the use of a vibrator to reject dust from the collected material with the aid of many holes and slots that allow the dust to pass through.</h5>
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
                    <h5>AMEE stands for autonomous martian environment excavator. This robot features a front loading bucket with a four-wheel skid-steer system and runs on the Nvidia Jetson TX1 computer. At the 2017 NASA Robotic Mining Competition, this robot collected the most material overall and took third place in the competition. This robot also won an innovation award with it's unique mechanism to change the center of mass. This is achieved by mounting the whole digging mechanism on a linear track and moving it forwards and backwards over the robot's frame. This is necessary because the the bucket on the front can be heavy enough to tip the robot forward when fully loaded.</h5>
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
                    <h5>
                        Master chief is a mysterious robot that no one on the current team has ever seen. The web-dev for the site was never given a description to this elusive specimen. It's believed
                        that it haunts the circuitry of the current robots: shorting circuits and messing up tolerances. Pretty spooky if you ask me.
                    </h5>
                </div>
            </div>
        )
    }
}

export default About