import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
// import {signupService} from '../services/auth-service/signupService';

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const [formValue, setFormValue] = useState({email: '', password: ''})
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    // const signUpHandler = async (e, email, password) => {
    //     console.log("email :", email, password);
    //     e.preventDefault();
    //     try {
    //         const res = await signupService(email, password);

    //         console.log(res);

    //         // if (res.status === 201) {
    //         //     localStorage.setItem("token", res.data.encodedToken);
    //         //     localStorage.setItem("isAuth", true);
    //         //     setAuth({token: res.data.encodedToken, isAuth: true});
    //         //     navigate("/products");
    //         // }
    //     } catch (err) {
    //         console.log("error form server found !!");
    //     }


    // };

    const signUpHandler = async (email, password) => {
        try {
            const response = await axios.post(`/api/auth/signup`, {
                email: email,
                password: password
            });
            console.log(response);
            // saving the encodedToken in the localStorage
            // localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign Up
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            signUpHandler(formValue.email, formValue.password)
                        }
                }>
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    value={
                                        formValue.email
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={
                                        e => setFormValue(prev => ({
                                            ...prev,
                                            email: e.target.value
                                        }))
                                    }/>

                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <p className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-500"
                                        onClick={
                                            () => setShowPass(!showPass)
                                    }>
                                        {
                                        showPass ? 'Hide' : 'Show'
                                    } </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password"
                                    type={
                                        showPass ? 'text' : 'password'
                                    }
                                    autoComplete="current-password"
                                    required
                                    value={
                                        formValue.password
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={
                                        e => setFormValue(prev => ({
                                            ...prev,
                                            password: e.target.value
                                        }))
                                    }/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        If, Already a member?
                        <NavLink to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Signup;
