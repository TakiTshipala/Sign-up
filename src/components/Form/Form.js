import React from "react"
import FormLayout from "../../layouts/LayoutForm"
import EmailField from "./Email"
import PasswordField from "./Password"
import SurnameField from "./Surname"
import TermsField from "./Terms"
import UsernameField from "./Username"
import SignUpButton from "./Signup"
import { disabledContext } from "./Signup"
import { isValidatedForm } from "./helpers/validation"
import "./Styles/styles.scss";
import OrField from './Or'
import AlternativeSignupField from './Alternativesignup'
import DividerField from './Divider'


class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            fullname: "",
            surname: ""
        }
    }

    onType = (field, input) => this.setState({ [field]: input })

    render() {
        const { email, fullname, password, surname, terms, or, alternative, divider } = this.state
        return <FormLayout>
            <h1 className = "Signup">Sign up</h1>
            <disabledContext.Provider value={{ disabled: !isValidatedForm(this.state) }}>
                <div className = "Surname">
                <UsernameField input={fullname} onType={this.onType}  />
                <div className = "Surname2">
                <SurnameField input={surname} onType={this.onType} />
                </div>
                </div>
                <EmailField input={email} onType={this.onType} />
                <PasswordField input={password} onType={this.onType} /> 
                <div className = "down">
                <TermsField input={terms} onType={this.onType} />
                </div>
                <DividerField input={divider} onType={this.onType} />
                <div className ="or2">
                <OrField input={or} onType={this.onType} />
                </div>
                <AlternativeSignupField input={alternative} onType={this.onType} />
                <SignUpButton />
            </disabledContext.Provider>
        </FormLayout>
    }
}

export default Form