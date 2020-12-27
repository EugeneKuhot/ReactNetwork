import React from "react"
import {Field, reduxForm} from "redux-form"

const LoginPage = (props) => {

    const onSubmit = (formData) => {

    }

    return <div>
        <h1>Login</h1>

        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <form action="#" onSubmit={props.handleSubmit}>
        <div>
            <Field component={'input'} name={'login'} type="text" placeholder={'Login'}/>
        </div>
        <div>
            <Field component={'input'} name={'password'} type="password" placeholder={'Password'}/>
        </div>
        <div>
            <label>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
            </label>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)



export default LoginPage