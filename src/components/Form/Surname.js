import React from "react"
import { TextfieldDefault as SurnameField } from "../lib/Textfieldsurname"
import { surname, isEmpty } from "./helpers/validation"
import withLabel from "./withLabel";
import "./Styles/styles.scss";


class Surname extends React.Component {

    static placeholder = ""
    static labelText = "Surname"

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false,
            InvalidatedSurnameeMessage: ""
        }
    }

    onChange = (e) => {
        const text = e.target.value;
        this.props.onType("surname", text)
        const { onDefault, onSuccess } = this.onChangeStyle
        if (surname.isValidated(text)) {
            onSuccess()
            return
        }
        onDefault()
    }

    onChangeStyle = {
        onSuccess: () => {
            this.setState({
                style: 'border-green-500 focus:shadow-none',
                hasError: false
            })
        },
        onError: () => {
            this.setState({
                style: 'border-red-400 bg-red-100 focus:shadow-none',
                hasError: true
            })
        },
        onDefault: () => {
            this.setState({
                style: 'bg-white focus:shadow-outline-sm',
                hasError: false
            })
        }
    }

    onBlur = (e) => {
        const text = e.target.value;
        const { onError, onDefault } = this.onChangeStyle
        if (isEmpty(text)) {
            onDefault()
            return
        }

        if (surname.isShort(text)) {
            this.setState({ InvalidatedUsernameMessage: "Surname is too short" })
            onError()
        }

        if (surname.hasDigit(text)) {
            this.setState({ InvalidatedUsernameMessage: "Surname should not contains numbers" })
            onError()
        }
    }

    render() {

        const { style, hasError, InvalidatedUsernameMessage } = this.state
        return (
            <div >
                <SurnameField
                    id="surname"
                    type="text"
                    value={this.props.input}
                    placeholder={Surname.placeholder}
                    classes={`mt-1 mb-1 ` + style}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
                {
                    hasError && <p className="text-xs text-red-500 font-helvetica bg-red-100">{InvalidatedUsernameMessage}</p>
                }
            </div>
        )
    }
}

export default withLabel(Surname)

