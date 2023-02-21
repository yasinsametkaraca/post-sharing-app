import React, {useState} from 'react';
import {loginAction, registerAction} from "../redux/actions/auth";
import {useDispatch} from "react-redux";

const AuthPage = () => {
    const [signUp, setSignUp,] = useState(true);
    const [authData, setAuthData] = useState({username:"",email:"",password:""});
    const dispatch = useDispatch();
    const onChangeFunction = (event) => {
        setAuthData({...authData,[event.target.name]:event.target.value})
    }
    const authenticateFunction = () => {
        if(signUp){
            dispatch(registerAction(authData));
        }else {
            dispatch(loginAction(authData));
        }
    }

    return (
        <div className={"w-full h-screen flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50"}>
            <div className={"px-6 py-10 bg-gray-50 w-1/3 p-3 rounded-2xl  shadow-cyan-500"}>
                <h1 className={"text-3xl text-gray-600 text-center font-bold"}>{signUp ? "Register" : "Login"}</h1>
                <div className={"flex flex-col my-9 space-y-4"}>
                    {signUp && <input value={authData.username} name={"username"} onChange={(e) => onChangeFunction(e)} type="text" placeholder={"Username"} className={"input-style"}/>}
                    <input value={authData.email} name={"email"} onChange={(e) => onChangeFunction(e)} type="text" placeholder={"Email"} className={"input-style"} />
                    <input value={authData.password} name={"password"} onChange={(e) => onChangeFunction(e)} type="password" placeholder={"Password"} className={"input-style"} />
                </div>
                <div onClick={() => authenticateFunction()} className={"w-full text-center p-3 bg-blue-600 hover:bg-blue-800 cursor-pointer text-white rounded"}>{signUp ? "Register" : "Login"}</div>
                <div className={"text-red-400 mt-5 text-xs cursor-pointer"}>
                    {
                        signUp ? <span onClick={()=>setSignUp(false)}>Do you already have an account? Login</span> : <span onClick={()=>setSignUp(true)}>Click to register</span>
                    }
                </div>
            </div>

        </div>
    );
};

export default AuthPage;
