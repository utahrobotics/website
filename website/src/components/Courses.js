import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

class Courses extends React.Component {
    constructor(props) {
        super(props)
        var level = props.match.params.level
        var vidId = props.match.params.vid
        var title = ""
        var videos = []

        this.nameInput = React.createRef();
        this.schoolInput = React.createRef();
        this.responseInput = React.createRef();

        if (level === "k4") {
            title = "Grades K-4"
            videos = [
                {
                    title: "Ocean (Start Here)",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/ERtdQWRrmvo" frameBorder="0" allowFullScreen></iframe>,
                    id: "ocean"
                },
                {
                    title: "Rainforest",
                    source: <iframe title="rainforest" width="1280" height="720" src="https://www.youtube.com/embed/dIuihmMk4bA" frameBorder="0" allowFullScreen></iframe>,
                    id: "rainforest"
                },
                {
                    title: "Robot",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/RogFNwnFWpQ" frameBorder="0" allowFullScreen></iframe>,
                    id: "robot"
                },
                {
                    title: "Asteroid",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/ff8cGTaQnjM" frameBorder="0" allowFullScreen></iframe>,
                    id: "asteroid"
                },

            ]
        }
        else if (level === "58") {
            title = "Grades 5-8"
            videos = [
                {
                    title: "Ocean (Start Here)",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/PXfOenMtmZ0" frameBorder="0" allowFullScreen></iframe>,
                    id: "ocean"
                },
                {
                    title: "Rainforest",
                    source: <iframe title="rainforest" width="1280" height="720" src="https://www.youtube.com/embed/7MTxJjSahGU" frameBorder="0" allowFullScreen></iframe>,
                    id: "rainforest"
                },
                {
                    title: "Robot",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/164ORWeipmI" frameBorder="0" allowFullScreen></iframe>,
                    id: "robot"
                },
                {
                    title: "Asteroid",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/HoIqGAMwUbw" frameBorder="0" allowFullScreen></iframe>,
                    id: "asteroid"
                },
            ]
        }
        else if (level === "912") {
            title = "Grades 9-12"
            videos = [
                {
                    title: "Ocean (Start Here)",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/AwAOolTNva4" frameBorder="0" allowFullScreen></iframe>,
                    id: "ocean"
                },
                {
                    title: "Rainforest",
                    source: <iframe title="rainforest" width="1280" height="720" src="https://www.youtube.com/embed/b3Z_ZsvKKlU" frameBorder="0" allowFullScreen></iframe>,
                    id: "rainforest"
                },
                {
                    title: "Robot",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/fHcdHOwwneU" frameBorder="0" allowFullScreen></iframe>,
                    id: "robot"
                },
                {
                    title: "Asteroid",
                    source: <iframe title="Ocean intro" width="1280" height="720" src="https://www.youtube.com/embed/0d1MgJ75BjE" frameBorder="0" allowFullScreen></iframe>,
                    id: "asteroid"
                },
            ]
        }
        this.state = {
            level: level,
            title: title,
            videos: videos,
            currVideo: vidId,
            comments: []
        }
    }

    componentDidMount() {
        this.updateComments()
    }

    updateComments() {
        const url = 'http://localhost:5001/posts'
        const params = new URLSearchParams()
        params.append('level', this.state.level)
        params.append('id', this.state.currVideo)

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(url, params, config)
            .then(data => {
                console.log("response data", data.data)
                this.setState({ comments: data.data })
            })
            .catch(err => console.log(err))
    }

    submitComment() {
        var name = this.nameInput.current.value
        var school = this.schoolInput.current.value
        var response = this.responseInput.current.value

        const url = 'http://localhost:5001/post'
        const params = new URLSearchParams()
        var now = new Date()
        var month = now.getMonth() + 1
        var day = now.getDate()
        var year = now.getFullYear()
        params.append('name', name)
        params.append('school', school)
        params.append('body', response)
        params.append('level', this.state.level)
        params.append('id', this.state.currVideo)
        params.append('timestamp', month + "/" + day + "/" + year)

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(url, params, config)
            .then(data => {
                console.log("response data", data.data)
                this.updateComments()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className="page">
                <h1 style={{ fontSize: 50, textAlign: "center" }}>{this.state.title}</h1>
                <div className="course_sidebar">
                    <h4>Sections</h4>
                    {this.state.videos.map(video => {
                        return (
                            <div key={video.title} className="section_tab">
                                <Link to={`/courses/${this.state.level}/${video.id}`}><h5>{video.title}</h5></Link>
                            </div>
                        )
                    })}
                </div>
                <div className="vids" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    {this.state.videos.filter(video => (video.id === this.state.currVideo) || (this.state.currVideo == null && video.id === "ocean")).map(video => {
                        return (
                            <div key={video.id} className="lesson_container">
                                <h3>{video.title}</h3>
                                {typeof video.source === 'string' || video.source instanceof String ?
                                    <video width="1280" height="720" controls>
                                        <source src={video.source} type="video/mp4"></source>
                                        Your browser does not support the video tag.
                                    </video>
                                    :
                                    video.source
                                }
                                <br />
                            </div>
                        )
                    })}
                </div>
                <div className="comments_container">
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" ref={this.nameInput} />
                        </Form.Group>
                        <Form.Group controlId="school">
                            <Form.Label>Your School</Form.Label>
                            <Form.Control type="text" placeholder="School" ref={this.schoolInput} />
                        </Form.Group>
                        <Form.Group controlId="body">
                            <Form.Label>Your Response</Form.Label>
                            <Form.Control type="text" as="textarea" ref={this.responseInput} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.submitComment()}>
                            Submit
                        </Button>
                    </Form>
                    {this.state.comments.reverse().map(comment => {
                        return (
                            <div className="comment">
                                <h6>{comment.name + " from " + comment.school} &emsp;&emsp; <span style={{ color: "grey", fontSize: "13px" }}>{comment.timestamp}</span></h6>
                                <h5>{comment.body}</h5>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Courses