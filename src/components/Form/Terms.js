import React from "react"
import withLabel from "./withLabelTerms";
import "./Styles/styles.scss";


class Surname extends React.Component {

    static labelText = ""

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false,
            InvalidatedUsernameMessage: ""
        }
    }



    onChangeStyle = {
        onDefault: () => {
            this.setState({
                style: 'bg-white focus:shadow-outline-sm  ',
                hasError: false
            })
        }
    }

    render() {

        const { } = this.state
        return (
            <div>
                <label className = "Terms">By clicking Sign up, I agree that I have read and accepted the</label>
                <a href="url" className = "TermsLink1"> Terms of Use</a>
                <label className = "Terms"> and</label>
                <a href="url" className = "TermsLink2"> Privacy Policy</a>
            </div>
        )
    }
}

export default withLabel(Surname)
