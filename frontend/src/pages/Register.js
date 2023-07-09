import React, { useState } from 'react'
import { registerEmployee } from '../apis/registerEmployee'

const Register = () => {

    const [employeeData, setEmployeeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: ""
    })

    const handleOnChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })
    }

    const handelRegister = () => {
        registerEmployee(employeeData)
    }

    return (
        <div>
            <div>
                <label htmlFor="fname">First Name : </label>
                <input name='firstName' id='fname' type="text" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="lname">Last Name : </label>
                <input name="lastName" id='lname' type="text" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input name='email' id='email' type="text" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input name='password' id='password' type="text" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="gender">Gender : </label>
                <select name="gender" id="gender" onChange={handleOnChange} >
                    <option value="" >select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div>
                <button onClick={handelRegister}>register</button>
            </div>
        </div>
    )
}

export default Register