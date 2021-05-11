import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../CSS/home.css'

const HomeComponent = () => {
    return (
        <div className='d-flex justify-content-center my-auto my-5 py-5'>
            <div className="home-box">
                <div className='inside-home text-center py-5'>
                    <h1 className="text-primary">MERN Authentication Project</h1>
                    <p className="text-sec">A Project which is developed in MERN Stack</p>

                    <div>
                      <NavLink exact to="/login">  <button className="btn btn-primary">Get Started</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
