import React from 'react'
import { useParams } from "react-router";
import comingSoon from '../static/coming_soon.mp4'

class Courses extends React.Component {
    constructor(props) {
        super(props)
        var level = props.match.params.level
        this.title = ""
        this.videos = []
        if (level === "k4") {
            this.title = "Grades K-4"
            this.videos = [
                {
                    title: "Coming Soon",
                    source: comingSoon
                }
            ]
        }
        else if (level === "58") {
            this.title = "Grades 5-8"
            this.videos = [
                {
                    title: "Coming Soon",
                    source: comingSoon
                }
            ]
        }
        else if (level === "912") {
            this.title = "Grades 9-12"
            this.videos = [
                {
                    title: "Coming Soon",
                    source: comingSoon
                }
            ]
        }
    }


    render() {

        return (
            <div className="page">
                <h1 style={{ fontSize: 50, textAlign: "center" }}>{this.title}</h1>
                <div className="course_sidebar">
                    <h4>Sections</h4>
                    {this.videos.map(video => {
                        return (
                            <div class="section_tab">
                                <h5>{video.title}</h5>
                            </div>
                        )
                    })}
                </div>
                <div className="vids" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    {this.videos.map(video => {
                        return (
                            <div className="lesson_container">
                                <h3>{video.title}</h3>
                                <video width="320" height="240" controls>
                                    <source src={video.source} type="video/mp4"></source>
                                Your browser does not support the video tag.
                            </video><br />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Courses