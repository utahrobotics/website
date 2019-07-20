import React from 'react'
import Northrop from '../static/sponsors/northrop.jpg'
import Unasa from '../static/sponsors/unasa.jpg'
import WarrenCat from '../static/sponsors/warren-cat.jpg'
import BigD from '../static/sponsors/bigd.png'
import Convene from '../static/sponsors/convene.png'
import GA from '../static/sponsors/ga.jpg'
import Fiero from '../static/sponsors/fiero.png'
import GreenEnergy from '../static/sponsors/green-energy.png'
import Millcreek from '../static/sponsors/millcreek.png'
import RioTinto from '../static/sponsors/rio-tinto.jpg'
import Speeds from '../static/sponsors/speeds.png'
import UtahMining from '../static/sponsors/utah-mining.jpg'
import WheelerCat from '../static/sponsors/wheeler-cat.png'
import { Spring, config } from 'react-spring/renderprops'

class Sponsors extends React.Component {

    constructor(props) {
        super(props)

        this.changeOnScroll = this.changeOnScroll.bind(this)
        this.handleScroll = this.handleScroll.bind(this)

        this.header1 = React.createRef()
        this.header2 = React.createRef()

        this.containerRef = React.createRef()
        this.state = {
            imageCoords: Array(13).fill(0),

            header1Height: 0,
            header2Height: 0,

            showHeader1: false,
            showHeader2: false,
        }
    }

    componentDidMount() {
        this.updateCircle()
        this.setState({
            header1Height: this.header1.current.offsetTop - 600,
            header2Height: this.header2.current.offsetTop - 700
        }, () => {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener("resize", this.updateCircle.bind(this));
            window.addEventListener("click", this.updateCircle.bind(this));
        })

        setTimeout(() => {
            this.updateCircle()
        }, 100)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateCircle.bind(this));
    }

    handleScroll(evt) {
        console.log(this.state.header1Height)
        this.changeOnScroll(evt, "showHeader1", this.state.header1Height)
        this.changeOnScroll(evt, "showHeader2", this.state.header2Height)
        this.changeOnScroll(evt, "showHeader3", 1900)
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


    updateCircle() {
        if (this.header1.current && this.header2.current) {
            this.setState({
                header1Height: this.header1.current.offsetTop - 600,
                header2Height: this.header2.current.offsetTop - 700
            })
        }
        if (this.containerRef.current) {
            const numItems = 13
            let start = 4.8
            const step = (2 * Math.PI) / numItems

            let circle = this.containerRef.current
            let images = this.containerRef.current.children
            console.log("circle", circle)
            console.log("children", images)
            let imageCoords = []
            for (var i = 0; i < images.length; i++) {
                let image = images[i]
                let radius = (circle.offsetWidth - image.offsetWidth) / 2;
                let tmpTop = ((circle.offsetHeight / 2) + radius * Math.sin(start)) - (image.offsetHeight / 2);
                let tmpLeft = ((circle.offsetWidth / 2) + radius * Math.cos(start)) - (image.offsetWidth / 2);
                start += step

                imageCoords.push([tmpTop + circle.offsetTop, tmpLeft + circle.offsetLeft])
            }
            this.setState({ imageCoords: imageCoords })
        }
    }

    render() {


        return (
            <>
                <div className="sponsors-banner">
                    <h2>Our Sponsors</h2>
                    <div ref={this.containerRef} className='circle-container'>
                        <img className="sponsor" style={{ top: this.state.imageCoords[1][0], left: this.state.imageCoords[1][1] }} src={Unasa} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[0][0], left: this.state.imageCoords[0][1] }} src={Northrop} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[2][0], left: this.state.imageCoords[2][1] }} src={WarrenCat} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[3][0], left: this.state.imageCoords[3][1] }} src={BigD} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[4][0], left: this.state.imageCoords[4][1] }} src={Convene} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[5][0], left: this.state.imageCoords[5][1] }} src={GA} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[6][0], left: this.state.imageCoords[6][1] }} src={Fiero} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[7][0], left: this.state.imageCoords[7][1] }} src={GreenEnergy} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[8][0], left: this.state.imageCoords[8][1] }} src={Millcreek} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[9][0], left: this.state.imageCoords[9][1] }} src={RioTinto} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[10][0], left: this.state.imageCoords[10][1] }} src={Speeds} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[11][0], left: this.state.imageCoords[11][1] }} src={UtahMining} alt="sponsor" />
                        <img className="sponsor" style={{ top: this.state.imageCoords[12][0], left: this.state.imageCoords[12][1] }} src={WheelerCat} alt="sponsor" />
                    </div>
                </div>
                <div className="sponsors-content">
                    <h1>Why sponsor Utah Student Robotics?</h1>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(-200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showHeader1 ? 1 : 0,
                            transform: this.state.showHeader1 ? 'translate3d(0px,0,0)' : 'translate3d(-200px,0,0)',
                        }}
                        config={config.slow}>
                        {props =>
                            <div className="sponsors-bit">
                                <h2 ref={this.header1} style={{ ...props }}>Practicals</h2>
                                <h4>Your logo will be displayed on our robot and on our booth at the NASA Lunabotics Competition, where NASA staff and 50 other universities will see it.</h4>
                            </div>
                        }
                    </Spring>
                    <Spring
                        from={{
                            opacity: 0,
                            transform: 'translate3d(-200px,0,0)',
                        }}
                        to={{
                            opacity: this.state.showHeader2 ? 1 : 0,
                            transform: this.state.showHeader2 ? 'translate3d(0px,0,0)' : 'translate3d(-200px,0,0)',
                        }}
                        config={config.slow}>
                        {props =>
                            <div className="sponsors-bit">
                                <h2 ref={this.header2} style={{ ...props, ...{ marginBottom: "60px" } }}>Ideals</h2>
                                <h4>This project is an investment in the future of engineering and robotics. Students on the team learn practical engineering skills that make them better prepared to join the work force. They also get to study and research cutting edge methods in robotics.</h4>
                            </div>
                        }
                    </Spring>
                    <h1 style={{ marginTop: "40px" }}>How is the money used?</h1>
                    <div className="sponsors-bit" style={{ marginBottom: "40px" }}>
                        <h4>We use donations from sponsors to purchase parts for the robot (motors, computers, metal) and for travel costs to the competition at Kennedy Space Center, Florida.</h4>
                    </div>

                    <h1>How to Sponsor</h1>
                    <div className="sponsors-bit">
                        <h4>Donations may be made online:</h4>
                        <ol style={{ marginBottom: "40px" }}>
                            <li><h4>Go to the <a href="https://umarket.utah.edu/ugive/level3.php?catid=22">College of Mines and Earth Sciences Development Site</a></h4></li>
                            <li><h4>Select “Department of Mining and Engineering General Development Fund”</h4></li>
                            <li><h4>Under “Special Instructions”, add a note specifically requesting that the funds be used for “The Utah Robotic Mining Project”</h4></li>
                            <li><h4>Continue with payment instructions</h4></li>
                        </ol>
                        <h4>Donations may also be sent to:</h4>
                        <h4 style={{ marginBottom: "40px" }}><em>The Utah Robotic Mining Project<br />
                            Department of Mining Engineering<br />
                            University of Utah<br />
                            William Browning Building Rm.313<br />
                            135 S 1460 E<br />
                            Salt Lake City, UT 84112</em></h4>
                        <h4>All donations are tax deductible. The team is a 501(c)(3) entity as a project of the University of Utah. Any donation questions may be directed to utahstudentrobotics@gmail.com Thank you for your support!</h4>
                    </div>
                </div>
            </>
        )
    }
}

export default Sponsors