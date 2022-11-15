import React from 'react'

class Contact extends React.Component {

    render() {
        // let ContactForm = () =>
        //     <form method="POST">
        //         <label htmlFor="name">Name</label>
        //         <input type="text" name="name" />

        //         <label htmlFor="email">Email</label>
        //         <input type="email" name="email" />

        //         <label htmlFor="message">Message</label>
        //         <textarea name="message" rows="3"></textarea>

        //         <input type="submit" />
        //     </form>

        return (
            //<ContactForm />
            <>
            <h3 style={{ textAlign: "center" }}>You can contact us with questions, comments, and anything else at <a href="mailto:utahstudentrobotics@gmail.com">utahstudentrobotics@gmail.com</a></h3>
            <h3 style={{ textAlign: "center" }}>We are open to onboarding anyone and everyone who has any interest in robotics!</h3>
            </>
        )
    }
}

export default Contact