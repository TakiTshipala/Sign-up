import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Textfield = ({
    id,
    type,
    placeholder,
    classes,
    value,
    onChange,
    onBlur, isFocused }) => {

    const input = useRef("input")
    useEffect(() => {
        isFocused && input.current.focus()
    }, [input])

    return <input
        ref={input}
        id={id}
        className={classes}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlurCapture={onBlur} />
}

const TextfieldDefault = (props) => {
    let mobileClasses = "xs:h-10 sm:h-10"
    let defaultClasses = "w-full bg-white border outline-none h-12 font-helvetica text-base rounded-xl tracking-wider px-4 py-2 focus:shadow-outline-sm "
    let allClasses = mobileClasses.concat(" " + defaultClasses + " " + props.classes)
    return <Textfield {...props} classes={allClasses} />
}



Textfield.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    classes: PropTypes.string

}

export { TextfieldDefault } 