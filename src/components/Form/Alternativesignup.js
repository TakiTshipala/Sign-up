import React from "react"
import withLabel from "./withLabelTerms";
import "./Styles/styles.scss";
import Google from "../../images/Google.png";
import Apple from "../../images/Apple.png";
import "./Styles/styles.scss";


class AlternativeSignup extends React.Component {

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
                <div className = "alternative">
                 <img
                 className = "Google"
                 src={Google}
                 />
                  <img
                  className = "Apple"
                 src={Apple}
                 />
                 </div>
            </div>
        )
    }
}

export default withLabel(AlternativeSignup)