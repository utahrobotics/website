import React from 'react'
import Team from '../static/team_transparent.png'
import Rover from '../static/rover.png'
import Rover2 from '../static/rover2.png'
import Rover3 from '../static/rover3.png'
import { Spring, config } from 'react-spring/renderprops'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this)
    }

    state = {
        team: false,
        showRover1: false,
        showRover2: false,
        showRover3: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ team: !this.state.team })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        console.log(evt)
        console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        this.changeOnScroll(evt, "showRover1", 720)
        this.changeOnScroll(evt, "showRover2", 1300)
        this.changeOnScroll(evt, "showRover3", 1900)
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
                            marginTop: '-100px',
                            maxHeight: '700px',
                            opacity: props.opacity,
                            transformOrigin: 'top center',
                            transform: `rotateX(${props.rotation})`,
                        }} />}
                    </Spring>
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt libero illo dicta distinctio minus aspernatur consequatur. Mollitia cupiditate neque obcaecati recusandae! Eum expedita amet quia illo facilis quidem soluta ullam magni maiores vero laboriosam enim, perspiciatis doloribus sapiente? Esse doloremque, sequi laborum molestiae omnis itaque iste accusamus beatae reprehenderit nihil quisquam tenetur, nam temporibus repudiandae inventore delectus ullam? Ducimus rerum tempore temporibus exercitationem perferendis repudiandae, voluptate consequatur quidem dolores obcaecati cum porro? Veritatis nihil, labore iste voluptates commodi vero officia nisi numquam, cum odio voluptatibus! Voluptatum vel autem labore unde assumenda officiis nobis quis architecto cumque quo! Inventore dicta sunt autem labore officiis repellat dolore, consectetur illo culpa odio facilis cum fugit atque facere animi, repudiandae amet at ea. Ducimus ipsum repellat recusandae quasi ex tenetur culpa, dolore, earum adipisci cum enim vero quisquam quo ea sit quibusdam iure aliquam laborum cupiditate architecto, corrupti dolorum? Minus explicabo iure facilis dolorem!</h5>
                </div>
                <h1>Our Robots</h1>
                <div className="robot-section">
                    <h2>Lorem ipsum dolor sit amet.</h2>
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
                        {props => <img key="rover" className="rover" src={Rover} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
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
                        {props => <img key="rover" className="rover" src={Rover2} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
                </div>
                <div className="robot-section">
                    <h2>AMEE</h2>
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
                        {props => <img key="rover" className="rover" src={Rover3} alt="Rover" style={{ ...props, ...{ height: "300px" } }} />}
                    </Spring>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit quis nobis aspernatur, esse et repellendus accusantium! Eligendi reprehenderit necessitatibus soluta asperiores ad enim dolorem rem aperiam sapiente, itaque non excepturi cum quasi magni obcaecati quod doloribus error. Itaque ducimus ea nemo quisquam, fuga labore ratione dicta asperiores nostrum magni?</h5>
                </div>
            </div>
        )
    }
}

export default About