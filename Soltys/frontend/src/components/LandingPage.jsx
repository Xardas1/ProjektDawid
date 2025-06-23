import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 max-w-3xl w-full text-center border border-gray-100">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m0-4h.01M12 20h.01M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Przygotuj się na odkrycie swojej{' '}
          <span className="text-blue-600 font-bold">Prawdziwej Osobowości!</span>
        </h2>

        {/* Checklist */}
        <div className="text-left text-gray-700 max-w-md mx-auto space-y-3 mb-8">
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-1" />
            <p>Otrzymasz 90 prostych pytań do ukończenia</p>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-1" />
            <p>Wybierz opcję, która najlepiej opisuje Ciebie</p>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 mt-1" />
            <p>Weź swoją czas – nie ma złych odpowiedzi</p>
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={() => navigate("/facebook")}
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-8 py-3 rounded-lg text-lg shadow-md transition">
          Rozpocznij test
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
