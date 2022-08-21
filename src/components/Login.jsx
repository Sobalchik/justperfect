import React from 'react';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import perfectVideo from '../assets/perfect.mp4'
import logo from '../assets/logo.png';
import {GoogleLogin, googleLogout} from "@react-oauth/google";

const Login = () => {
    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className=" relative w-full h-full">
                <video
                    src={perfectVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />

                <div className="absolute flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="400px" />
                    </div>
                </div>

                <GoogleOAuthProvider clientId='324064534908-6g2438otv2f0teh88p6npv99752tj6mt.apps.googleusercontent.com'>
                    <GoogleLogin
                    onSuccess={() => console.log('hi')}
                    onError={() => console.log('error')}/>
                </GoogleOAuthProvider>

            </div>
        </div>
    );
};

export default Login;