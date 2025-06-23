import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();


    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <button
                onClick={() => navigate("/facebook")}
                className="bg-blue-600 text-white px-6 py-3 rounded font-bold text-lg hover:bg-blue-700"
            >
                Zaloguj się przez Facebooka
            </button>
        </div>
    );
};


export default LoginPage;