import React from "react"
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";

const LoginPage = (props) => {

    const onSubmit = (formData) => {
        alert(formData)
    }

    return <div>
        <h1>Login</h1>

        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={'login'}
                   type="text"
                   placeholder={'Login'}/>
        </div>
        <div>
            <Field component={'input'}
                   validate={[required]}
                   name={'password'}
                   type="password"
                   placeholder={'Password'}/>
        </div>
        <div>
            <label>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> Remember me
            </label>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default LoginPage