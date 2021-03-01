import React from 'react'
import {reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormControls/FormControls'
import {required} from '../../utils/validators'
import {Redirect} from 'react-router-dom'
import s from './../common/FormControls/FormControls.module.css'

const LoginPage = ({loginThunkCreator, isAuth, captcha}) => {
    const onSubmit = (formData) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
       return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>

    )
}

const LoginForm = ({handleSubmit, error, captcha}) => {
    return <form onSubmit={handleSubmit}>
            {createField(Input, [required], 'email', 'Login', 'text')}
            {createField(Input, [required], 'password', 'Password', 'password')}
        <div>
            <label>
                {createField(Input, [], 'rememberMe', '', 'checkbox')} Remember me
            </label>
        </div>

        {captcha && <img src={captcha}/>}

        <div>
            <button>Submit</button>
        </div>

        { error && <div className={s.summaryErrorBlock}>
            {error}
        </div>}
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default LoginPage