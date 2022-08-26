import React from 'react';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import perfectVideo from '../assets/perfect.mp4'
import logo from '../assets/logo.png';
import {GoogleLogin} from "@react-oauth/google";
import {client} from "../client";
import  jwt_decode from 'jwt-decode'


const Login = () => {
    const  navigate = useNavigate();

    const responseGoogle = (response) => {

        const decoded = jwt_decode(response.credential);
        localStorage.setItem('user', JSON.stringify(decoded));

        const doc = {
            _id: decoded.sub,
            _type: 'user',
            userName: decoded.name,
            image: decoded.picture,
        }

        client.createIfNotExists(doc).then(()=>{
            navigate('/',{replace: true})
        })
    }

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

                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="400px" />
                    </div>
                    <GoogleOAuthProvider clientId='324064534908-6g2438otv2f0teh88p6npv99752tj6mt.apps.googleusercontent.com'>
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onError={responseGoogle}/>
                    </GoogleOAuthProvider>
                </div>


            </div>
        </div>
    );
};

export default Login;