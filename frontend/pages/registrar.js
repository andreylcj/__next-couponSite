import React, { useState, useContext } from 'react'
import validRegister from '../assets/utils/ValidRegister'
import Loading from '../snnipets/Loading'
import { postData } from '../assets/utils/fetchData';
import Link from 'next/link';
import ACTION from '../store/Actions';
import { DataContext } from '../store/GlobalState';

function Register() {

    const [state, dispatch] = useContext(DataContext);
    const { loading } = state.loadingRegisterAndLoginReduxStore
    const { userData } = state.userDataRedux
    const [submitStatus, setSubmitStatus] = useState({
        emailMessage: '',
        passwordMessage: '',
        emailAlreadyExist: '',
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

        const { emailMessage, passwordMessage } = validRegister(userData.email, userData.password)

        setSubmitStatus({
            emailMessage: emailMessage,
            passwordMessage: passwordMessage,
        })

        if (emailMessage || passwordMessage) {
            return
        }


        dispatch({ type: ACTION.START_LOADING, });
        const res = await postData('/api/auth/register', userData);
        dispatch({ type: ACTION.END_LOADING, });

        setSubmitStatus({
            emailAlreadyExist: res.emailMessage,
        })

    }

    return (

        <div className="container text-center p-4" >
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
                            ) : submitStatus.emailAlreadyExist ?
                                (
                                    <p>
                                        {submitStatus.emailAlreadyExist}.
                                        Deseja fazer <Link href="/entrar">
                                            <a
                                                onClick={() => dispatch({ type: ACTION.UPDATE_USER_DATA, payload: { password: "" } })}
                                            >
                                                login
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
                                'CADASTRAR'
                            )
                    }
                </button>
            </form>
        </div >
    )
}

export default Register
