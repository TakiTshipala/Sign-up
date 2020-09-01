import React, { Fragment } from "react";
import { TextfieldDefault as PasswordField } from "../lib/Textfield";
import { TextDefault as PasswordHint } from "../lib/Text";
import { TextDefault as PasswordError } from "../lib/Text";
import {
  isPassword,
  isPasswordUpper,
  isPasswordLower,
  isPasswordDigit,
  isPasswordSpecialChar,
  isEmpty,
} from "./helpers/validation";
import withLabel from "./withLabel";
import "./Styles/styles.scss";
import Eye from "../../images/eye.png";
import HiddenEye from "../../images/hidden.png";

class Password extends React.Component {
  state = {
    isPasswordShown: false
  };

  togglePasswordVisibility = () => {
    let { isPasswordShown } = this.state;
    console.log(isPasswordShown);
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  static placeholder = "";
  static labelText = "Password";

  constructor(props) {
    super(props);
    this.state = {
      style: "",
      hasError: false,
      isSatisified: false,
      invalidatedPasswordMessage: "",
      hint: {
        text: "Create a password that contains:",
        requirement: "8 characters",
        valid: false,
      },
      hint2: {
        requirement: "1 number",
        valid: false,
      },
      hint3: {
        requirement: "1 uppercase",
        valid: false,
      },
      hint4: {
        requirement: "1 lowercase",
        valid: false,
      },
      hint5: {
        requirement: "1 special character",
        valid: false,
      },
    };
  }

  onChange = (e) => {
    const text = e.target.value;
    this.props.onType("password", text);
    const { onDefault, onSuccess } = this.onChangeStyle;

    if (this.validate(text)) {
      this.setState({ isSatisified: true });
      onSuccess();
    } else {
      this.setState({ isSatisified: false });
      onDefault();
    }
  };

  validate = (value) => {
    /* Min Lenght - Hint  */
    if (isPassword(value)) {
      let hint = { ...this.state.hint };
      hint.valid = true;
      this.setState({ hint });
    } else {
      let hint = { ...this.state.hint };
      hint.valid = false;
      this.setState({ hint });
    }

    /* Digit - Hint 2 */
    if (isPasswordDigit(value)) {
      let hint2 = { ...this.state.hint2 };
      hint2.valid = true;
      this.setState({ hint2 });
    } else {
      let hint2 = { ...this.state.hint2 };
      hint2.valid = false;
      this.setState({ hint2 });
    }

    /* UpperCase - Hint 3 */
    if (isPasswordUpper(value)) {
      let hint3 = { ...this.state.hint3 };
      hint3.valid = true;
      this.setState({ hint3 });
    } else {
      let hint3 = { ...this.state.hint3 };
      hint3.valid = false;
      this.setState({ hint3 });
    }

    /* LowerCase - Hint 4 */
    if (isPasswordLower(value)) {
      let hint4 = { ...this.state.hint4 };
      hint4.valid = true;
      this.setState({ hint4 });
    } else {
      let hint4 = { ...this.state.hint4 };
      hint4.valid = false;
      this.setState({ hint4 });
    }

    /* Special Character - Hint 5 */
    if (isPasswordSpecialChar(value)) {
      let hint5 = { ...this.state.hint5 };
      hint5.valid = true;
      this.setState({ hint5 });
    } else {
      let hint5 = { ...this.state.hint5 };
      hint5.valid = false;
      this.setState({ hint5 });
    }

    /**********
        Check All Requirements
     **********/

    if (
      isPassword(value) &&
      isPasswordDigit(value) &&
      isPasswordUpper(value) &&
      isPasswordLower(value) &&
      isPasswordSpecialChar(value)
    ) {
      return true;
    } else {
      return false;
    }
  };

  onChangeStyle = {
    onSuccess: () => {
      this.setState({
        style: "border-green-500 focus:shadow-none",
        hasError: false,
      });
    },
    onError: () => {
      this.setState({
        style: "border-red-400 bg-red-100 focus:shadow-none",
        hasError: true,
      });
    },
    onDefault: () => {
      this.setState({
        style: "bg-white focus:shadow-outline-sm",
        hasError: false,
      });
    },
  };

  onBlur = (e) => {
    const text = e.target.value;
    const { onError, onDefault } = this.onChangeStyle;
    if (isEmpty(text)) {
      onDefault();
      return;
    }
  };

  render() {
    const { style, hasError, isPasswordShown } = this.state;
    return (
      <div>
        <p>{(this.isPasswordShown)}</p>
        <PasswordField
          id='password'
          type={!isPasswordShown ? "password" || null : "text"}
          placeholder={Password.placeholder}
          value={this.props.input}
          classes={`mt-1 mb-1 ` + style}
          onChange={this.onChange}
          onBlur={this.onBlur}

        />
        {
          <img
            src={HiddenEye}
            hidden={isPasswordShown}
            className='Eye'
            alt="eye"
            onClick={this.togglePasswordVisibility}
          />
        }

        {
          <img
            src={Eye}
            hidden={!isPasswordShown}
            className='Eye'
            alt="eye"
            onClick={this.togglePasswordVisibility}
          />
        }

        <div className='flex'>
          {(!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint.text}
                classes={`text-xs font-bold`}
              />
            </Fragment>
          )) || (
            <PasswordError
              content={this.state.invalidatedPasswordMessage}
              classes={`text-red-500 bg-red-100 text-xs`}
            />
          )}
        </div>

        <div className='flex'>
          {!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint.requirement}
                classes={
                  (this.state.hint.valid ? `text-green-400` : `text-gray-900`) +
                  ` text-xs ml-1`
                }
              />
            </Fragment>
          )}
        </div>
        <div className='flex'>
          {!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint2.requirement}
                classes={
                  (this.state.hint2.valid
                    ? `text-green-400`
                    : `text-gray-900`) + ` text-xs ml-1`
                }
              />
            </Fragment>
          )}
        </div>

        <div className='flex'>
          {!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint3.requirement}
                classes={
                  (this.state.hint3.valid
                    ? `text-green-400`
                    : `text-gray-900`) + ` text-xs ml-1`
                }
              />
            </Fragment>
          )}
        </div>

        <div className='flex'>
          {!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint4.requirement}
                classes={
                  (this.state.hint4.valid
                    ? `text-green-400`
                    : `text-gray-900`) + ` text-xs ml-1`
                }
              />
            </Fragment>
          )}
        </div>

        <div className='flex'>
          {!hasError && (
            <Fragment>
              <PasswordHint
                content={this.state.hint5.requirement}
                classes={
                  (this.state.hint5.valid
                    ? `text-green-400`
                    : `text-gray-900`) + ` text-xs ml-1`
                }
              />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withLabel(Password);
