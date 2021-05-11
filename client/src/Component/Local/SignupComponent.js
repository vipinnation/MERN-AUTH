import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import axios from 'axios';
import '../../CSS/signup.css'

const SignupComponent = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState("");



    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/profile')
        }
    }, [])

    const submitHandler = async (e) => {
        if (!email || !password || !confPassword) {
            console.log('All Field Required')
            setError("All Field Reqiured");

            setTimeout(() => {
                setError('')
            }, 5000);

            return
        }


        if (password !== confPassword) {
            setError('Password Mismatch')

            setTimeout(() => {
                setError('')
            }, 5000);

            return

        }

        if (password.length < 5 || confPassword.length < 5) {
            setError('Password must of 6 digit')

            setTimeout(() => {
                setError('')
            }, 5000);

            return
        }

        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkEmail = regexp.test(String(email).toLowerCase());

        if (checkEmail == false) {
            setError('Enter Valid Email');

            setTimeout(() => {
                setError('')
            }, 5000);

            return

        }



        if (!error) {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const dataInput = {
                email, password
            }

            try {
                const { data } = await axios.post('/signup', dataInput, config)

                setError(data.message)

                setTimeout(() => {
                    setError('')
                }, 5000)

            } catch (error) {

                console.log(error)
            }

        }



    }

    return (
        <div>
            <div className='container signup-Container '>
                <div className="signup-box">
                    <h2>Register Here</h2>
                    <form method="POST" >

                        <div>
                            {error &&
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>{error}</strong>
                                    
                                </div>
                            }
                        </div>
                        <div className="user-box mt-2">
                            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="confPassword" onChange={e => setConfPassword(e.target.value)} />
                            <label>Confirm Password</label>
                        </div>
                        <NavLink className="btnHover" to="#">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <button type="submit" className='btn text-white btnHover' onClick={submitHandler}>Submit</button>

                        </NavLink>

                        <div className="me-auto">
                            <NavLink exact to="/login">Already Have an Account</NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent
