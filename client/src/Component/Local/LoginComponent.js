import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import '../../CSS/login.css'

const LoginComponent = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/profile')
        }
    }, [])

    const submitHandler = async (e) => {
        if (!email || !password) {
            setError('All Field Required');

            setTimeout(() => {
                setError('')
            }, 10000);
            return
        }

        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post('/login', { email, password }, config)

            setError(data.message);
            if (data.token) {

                localStorage.setItem('authToken', data.token)
                history.push('/profile')

            }

            setTimeout(() => {
                setError('')
            }, 5000);
        } catch (error) {

        }


    }
    return (
        <div>
            <div className='container login-Container'>
                <div className="login-box">
                    <h2>Login</h2>
                    {error && <div className="alert alert-warning" role="alert">
                        <span>{error}</span>
                    </div>}
                    <form>
                        <div className="user-box">
                            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <NavLink to="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <button type="submit" className='btn text-white' onClick={submitHandler} >Submit</button>
                        </NavLink>



                        <NavLink exact to="/signup"><h6>Create An Account</h6></NavLink>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
