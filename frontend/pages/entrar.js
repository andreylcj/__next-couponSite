import React, { useState, useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import ACTION from '../store/Actions'
import Loading from '../snnipets/Loading'
import validLogin from '../assets/utils/ValidLogin';
import { postData } from '../assets/utils/fetchData';
import Link from 'next/link'
import Cookie from 'js-cookie'

function Register() {

    const [state, dispatch] = useContext(DataContext);
    const { loading } = state.loadingRegisterAndLoginReduxStore
    const { userData } = state.userDataRedux

    const [submitStatus, setSubmitStatus] = useState({
        emailMessage: '',
        passwordMessage: '',
    })

    const { email, password } = userData

    const handleInputChange = e => {
        const { name, value } = e.target
        dispatch({
            type: ACTION.UPDATE_USER_DATA,
            payload: { [name]: value }
        });
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const { emailMessage, passwordMessage } = validLogin(userData.email, userData.password)

        setSubmitStatus({
            emailMessage: emailMessage,
            passwordMessage: passwordMessage,
        })

        if (emailMessage || passwordMessage) {
            return
        }

        dispatch({ type: ACTION.START_LOADING, });
        const res = await postData('/api/auth/login', userData);
        dispatch({ type: ACTION.END_LOADING, });

        setSubmitStatus({
            emailNotExist: res.emailMessage,
            wrongPassword: res.passwordMessage,
        })

        if (res.emailMessage || res.passwordMessage)
            return

        Cookie.set('refreshToken', res.refreshToken, {
            path: '/api/auth/accessToken',
            expires: 25
        })
        localStorage.setItem('firstLogin', true)
    }

    return (
        <div className="container text-center p-4">
            <form className="d-block" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="email" className="d-block">Email</label>
                    <input type="email" id="email"
                        //aria-describedby="emailHelp" 
                        name="email"
                        onChange={handleInputChange} value={email}
                    />
                    {
                        submitStatus.emailMessage ?
                            (
                                <p>{submitStatus.emailMessage}</p>
                            ) : submitStatus.emailNotExist ?
                                (
                                    <p>
                                        {submitStatus.emailNotExist}.
                                        Deseja se <Link href="/registrar">
                                            <a
                                                onClick={() => dispatch({ type: ACTION.UPDATE_USER_DATA, payload: { password: "" } })}
                                            >
                                                cadastrar
                                                </a>
                                        </Link>?
                                    </p>
                                ) : (
                                    ''
                                )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="d-block">Senha</label>
                    <input type="password" id="password" name="password"
                        onChange={handleInputChange} value={password} />
                    {
                        submitStatus.passwordMessage ?
                            (
                                <p>{submitStatus.passwordMessage}</p>
                            ) : submitStatus.wrongPassword ?
                                (
                                    <p>{submitStatus.wrongPassword}</p>
                                ) :
                                (
                                    ''
                                )
                    }
                </div>
                <button type="submit">
                    {
                        loading ?
                            (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                'ENTRAR'
                            )
                    }
                </button>
            </form>
        </div>
    )
}

export default Register
