import React from "react"
import { Form } from "../components/Form"
import '../fonts/Muli-Regular.ttf'

class App extends React.Component {
    render() {
        return (<div className="flex justify-center h-screen items-center">
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />
            <Form />
        </div>)
    }
}

export default App