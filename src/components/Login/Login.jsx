import React from "react"
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
       return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={'email'}
                   type="text"
                   placeholder={'Login'}/>
        </div>
        <div>
            <Field component={Input}
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