import React from 'react'
import Arrow from '../static/arrow.png'
import { Accordion, Card } from 'react-bootstrap'
import Mod from '../static/TuringCompleteV1.0.jar'
import JEI from '../static/jei.jar'

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

class Resources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pwd: "",
            ips: []
        }
    }


    async handleMove(direction) {
        // const response = await fetch('http://localhost:5000/move', {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: toUrlEncoded({ move: direction }),
        //     credentials: 'omit'
        // })

        const response = await fetch('http://usr.coe.utah.edu:3100/move', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: toUrlEncoded({ move: direction }),
            credentials: 'omit'
        })

        return response
    }

    populateIPs() {
        if (this.state.pwd === "usr") {
            fetch('http://usr.coe.utah.edu:5001/ips', {
            //fetch('http://localhost:5001/ips', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                credentials: 'omit'
            }).then(response => {
                return response.text()
            }).then(data => {
                console.log(data ? JSON.parse(data) : [])
                this.setState({ ips: data ? JSON.parse(data) : [] })
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    render() {


        return (
            <Accordion style={{ marginTop: "50px" }}>
                <Card>

                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        General Resources
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <ul>
                                <li>Link to <a href="https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html">NASA RMC site</a></li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Programming Resources
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Running Linux
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    Download VMWare to run a virtual machine
                                                    <ul>
                                                        <li><a href="https://www.eng.utah.edu/vmware/">U of U VMWare Login</a></li>
                                                        <li>If on Windows: download VMWare Workstation 12</li>
                                                        <li>If on Mac: download VMware Fusion</li>
                                                        <li>If on Linux but not running Ubuntu: download VMWare Workstation 12</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Download Ubuntu 16.04 LTS .iso
                                                    <ul>
                                                        <li><a href="https://www.ubuntu.com/download/desktop">Download page</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Create a new virtual machine
                                                    <ul>
                                                        <li>Use the file you downloaded above as the installer disk image</li>
                                                        <li>Minimum Recommended Settings:</li>
                                                        <ul>
                                                            <li>2 CPU cores</li>
                                                            <li>4 GB of RAM</li>
                                                            <li>40 GB of Hard Drive (HD) space</li>
                                                            <li>3D acceleration enabled</li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Most ROS utilities use the command line. Open this by pressing the circle icon in the top left and typing in <code>terminal</code>.
                                                    <ul>
                                                        <li>The terminal is also accessable by typing <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd></li>
                                                        <li>It is recommended that you lock the terminal to the side bar by right clicking on the icon and selecting ‘Lock to Launcher’.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Install ROS
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <ul>
                                            <li>Use ROS Kinetic</li>
                                            <li>Follow the instructions <a href="http://wiki.ros.org/kinetic/Installation/Ubuntu">here</a></li>
                                            <ul>
                                                <li>Ignore step 1.1. This is already set up in Ubuntu</li>
                                                <li>On step 1.4, run the command: <code>sudo apt-get install ros-kinetic-desktop-full</code></li>
                                            </ul>
                                        </ul>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        ROS Tutorials
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <ul>
                                                <li>ROS requires that users have a basic understanding of the command line and C++ and/or Python. If you are unfamiliar with these, please follow some of the tutorials in the section below.</li>
                                                <li>Beginner ROS tutorials can be found <a href="http://www.rsl.ethz.ch/education-students/lectures/ros.html">here</a></li>
                                                <li>A good tutorial series from ETH Zuric can be found <a href="http://www.rsl.ethz.ch/education-students/lectures/ros.html">here</a></li>
                                                <ul>
                                                    <li>Videos of the lectures are at the bottom of the page</li>
                                                </ul>
                                                <li>Follow these tutorials to get familiar with the foundations of ROS</li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        Programming Tutorials
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <ul>
                                                <li>Command Line</li>
                                                <ul>
                                                    <li><a href="http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html">Terminus Game</a></li>
                                                </ul>
                                                <li>C++</li>
                                                <ul>
                                                    <li><a href="http://www.learn-cpp.org/">learn-cpp</a></li>
                                                </ul>
                                                <li>Python</li>
                                                <ul>
                                                    <li><a href="https://www.codecademy.com/learn/learn-python">Codecademy</a></li>
                                                    <li><a href="https://www.udacity.com/course/introduction-to-python--ud1110">Udacity Introduction to Python</a></li>
                                                    <li><a href="https://www.udacity.com/course/programming-foundations-with-python--ud036">Udacity Programming Foundations with Python</a></li>
                                                </ul>
                                                <li>Git</li>
                                                <ul>
                                                    <li><a href="https://www.udacity.com/course/how-to-use-git-and-github--ud775">Udacity How to Use Git and GitHub</a></li>
                                                </ul>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Links
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <ul>
                                            <li><a href="https://github.com/utahrobotics">Team GitHub</a></li>
                                        </ul>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        Electrical Resources
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Eagle Demo
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul>
                                                <li>Link to <a href="http://eagle.autodesk.com/eagle/software-versions/44">Eagle 9.4.1</a></li>
                                                <li>Link to <a href="https://www.diymodules.org/eagle-show-object?type=usr&id=2786&part=_hhn_attiny25_45_85.lbr&device=ATTINY85%2A">ATTiny library</a></li>
                                                <li>Link to <a href="https://www.mouser.com/datasheet/2/268/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATti-1315542.pdf">ATTINY25/45/85 Datasheet</a></li>
                                                <li>Link to <a href="https://www.tweaking4all.com/hardware/arduino/arduino-ws2812-led/">addressable LED strip overview</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>


                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Common Acronyms
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            NASA loves acronyms, here are some commonly used ones.
                            <ul>
                                <li><b>AMEE</b>: Autonomous Martian Environment Excavator</li>
                                <li><b>DOF</b>: Degree Of Freedom</li>
                                <li><b>ESD</b>: Electro-Static Discharge</li>
                                <li><b>I2C</b>: Inter Integrated Circuit</li>
                                <li><b>IMU</b>: Inertial Measurement Unit</li>
                                <li><b>ISRU</b>: In-Situ Resource Utilization</li>
                                <li><b>MCU</b>: MicroController Unit</li>
                                <li><b>NASA</b>: National Aeronautics and Space Administration</li>
                                <li><b>PCB</b>: Printed Circuit Board</li>
                                <li><b>PCL</b>: Point Cloud Library</li>
                                <li><b>PDB</b>: Power Distribution Board</li>
                                <li><b>PWM</b>: Pulse Width Modulation</li>
                                <li><b>RMC</b>: Robotic Mining Competition</li>
                                <li><b>ROS</b>: Robot Operating System</li>
                                <li><b>RTFM</b>: Read The F@#%ing Manual</li>
                                <li><b>SMACH</b>: State MACHine</li>
                                <li><b>STL</b>: STereoLithography</li>
                                <li><b>TF</b>: TransForm</li>
                                <li><b>TLA</b>: Three Letter Acronym</li>
                                <li><b>UART</b>: Universal Asynchronous Receive Transmit</li>
                                <li><b>URDF</b>: Unified Robot Description Format</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Motor Controller
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <h1>Materials</h1>
                            <ul>
                                <li>Power supply</li>
                                <li>Motor Controller</li>
                                <li>Potentiometer</li>
                                <li>Motor</li>
                            </ul>
                            <h1>Setup</h1>
                            <p>Turn on the power supply without the motor connected. Turn the output voltage to 12 volts. On some of the power supplies in the clinic lab you have to enable the output before you can change the voltage.<br />
                                <br />
                                For the Agilent E3631A in the lab the procedure may be as follows:</p>
                            <ol>
                                <li>Turn on the unit with the button in the bottom left</li>
                                <li>Select the +25V output, 2nd button from the left, top row</li>
                                <li>Make sure the motor controller is not connected to the power supply</li>
                                <li>Turn on the output, rightmost button, bottom row</li>
                                <li>Tune to 12V using the adjustment knob on the right of the unit. Use the arrows beneath the knob to select which digit you are changing.</li>
                                <li>Turn the output off to prepare for the next steps</li>
                            </ol>
                            <p>
                                There are 4 14 AWG wires connected to the motor controller. Two should be going to the center and two to the right hand side. The center wires are your power wires. With the power supply off, unscrew the + and COM connectors of the right hand set of connectors on the power supply. There should be a hole on the top of these connectors that a wire can be inserted into. Insert the red power wire into the + connector and the black power wire into the COM connector
                            </p>
                            <p><b>DO NOT REVERSE THESE WIRES, IT WILL CAUSE PERMANENT DAMAGE</b></p>
                            <p>Make sure the potentiometer is connected to the motor controller. If it became disconnected, reconnect it to the pin header labeled S1 on the motor controller with the wire colors, from outside to inside, going Orange, Red, Brown. This potentiometer must be centered before powering on the motor controller.</p>
                            <p>Now make sure the motor is securely connected to the motor controller. Wire polarity does not matter as much here. Make sure the motor itself is secured. It may be handy to place it in between the handles of some plyers so the torque does not throw it, along with everything else, off of the table.</p>
                            <p>Ensure the potentiometer is centered.</p>
                            <h1>Running the Motor</h1>
                            <p>Turn on the output of the power supply. If everything was done correctly, the motor should not be moving but some LEDs should light up on the motor controller. Now slowly turn the potentiometer, the motor should start to turn. Changing the direction that you turn the potentiometer should change the direction of the motor. Try not to do drastic direction changes, this could damage things.

                                Note on the potentiometer: turning the knob counter clockwise will cause the motor to go faster than if it were turned clockwise. I think this is caused by the potentiometer being old and not being an even resistance.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                        Minecraft Mod Download
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <h2>Mod Installation Tutorial</h2>
                            <iframe title="Mod Tutorial" width="560" height="315" src="https://www.youtube.com/embed/WN0l28SusLg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                            <h2>Relevant Software Download Links</h2>
                            <a href="https://www.java.com/en/download/manual.jsp">Download Java Run Time Environment</a><br />
                            <a href="http://files.minecraftforge.net/">Download Forge</a>
                            <h2>Mod Downloads</h2>
                            <a href={Mod}>USR Turing Complete Minecraft Mod for 1.16.3</a><br />
                            <a href={JEI}>JEI mod (same install procedure as the USR mod)</a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                        Super Secret Cool Stuff
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <div className="move-btns">
                                <button className="hidden-btn" onClick={() => this.handleMove("forward")}><img alt="forward" src={Arrow} height="50" className="rotateimg270 hidden-btn" /></button>
                                <div className="left-right-btns">
                                    <button className="hidden-btn" onClick={() => this.handleMove("left")}><img alt="left" src={Arrow} height="50" className="rotateimg180 hidden-btn" /></button>
                                    <button className="hidden-btn" onClick={() => this.handleMove("right")}><img alt="right" src={Arrow} height="50" /></button>
                                </div>
                                <button className="hidden-btn" onClick={() => this.handleMove("backward")}><img alt="backward" src={Arrow} height="50" className="rotateimg90 hidden-btn" /></button>
                            </div>

                            <div className="ipLogin">
                                <input type="text" placeholder="Password" onChange={(e) => this.setState({ pwd: e.target.value })}></input>
                                <button onClick={() => this.populateIPs()}>View IP's</button>
                            </div>
                            <div>
                                {this.state.ips.map(ip => {
                                    return (
                                        <div className="comment">
                                            <h6>Name: {ip.name}</h6>
                                            <h5>IP: {ip.ip}</h5>
                                            <h5>Reported: {ip.time}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default Resources