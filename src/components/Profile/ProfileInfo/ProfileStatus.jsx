import React from "react"
import s from '../Profile.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
              editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>Hello world!</span>
                    </div>
                :
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={`Hello world!`}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus