
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
                <hr class="solid" className = "Divider"></hr>
            </div>
        )
    }
}

export default withLabel(Surname)




