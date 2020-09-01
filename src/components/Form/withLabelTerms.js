import React from "react"
import { TextDefault as Label } from "../lib/Text"

const withLabel = Field => {
    class withLabel extends React.Component {
        htmlFor = Field.labelText.toLowerCase();
        content = Field.labelText;
        render() {
            return (<div className="mt-5">
                <Label
                    htmlFor={this.htmlFor}
                    content={this.content}
                    classes="font-semibold text-xs" />
                <Field {...this.props} />
            </div>)
        }
    }
    return withLabel
}

export default withLabel