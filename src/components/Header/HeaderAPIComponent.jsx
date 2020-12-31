import React from "react"
import Header from "./Header"


class headerAPIComponent extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default headerAPIComponent