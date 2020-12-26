import React from "react"
import s from '../Profile.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
              editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || `No Status`}</span>
                    </div>
                :
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus