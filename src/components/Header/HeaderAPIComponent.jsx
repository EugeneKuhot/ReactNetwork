import React from "react"
import Header from "./Header"


class headerAPIComponent extends React.Component {
    componentDidMount() {
        this.props.authCheck()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default headerAPIComponent