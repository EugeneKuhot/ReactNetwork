import React from "react";
import Header from "./Header";
import * as axios from "axios";


class headerAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuth(id, login, email)
                }

            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export default headerAPIComponent