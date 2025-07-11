import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return ( 
<div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 font-sans">
  {/* Logos */}
  <div className="flex justify-center gap-8 mb-10">
    <img src="/logo.png" alt="Latarnik Logo" className="h-14" />
    <img src="/ceo-logo.png" alt="CEO Logo" className="h-10 mt-10" />
  </div>

  {/* Title */}
  <h2 className="text-2xl font-bold text-blue-900 mb-8">Jak wypełnić test?</h2>

  {/* Instructions */}
  <div className="space-y-8 text-left max-w-2xl">
    <div className="flex items-start gap-4">
      <span className="text-4xl font-bold text-orange-400">1.</span>
      <p>
        Przed Tobą test z 20 stwierdzeniami.{" "}
        <strong>Wybierz jedną z trzech odpowiedzi</strong> przy każdym stwierdzeniu.
      </p>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-4xl font-bold text-orange-400">2.</span>
      <p>
        Możesz kliknąć <strong>"wyjaśnienie"</strong> w prawym górnym rogu ekranu, aby uzyskać dodatkowe informacje.
      </p>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-4xl font-bold text-orange-400">3.</span>
      <p>
        Po wypełnieniu testu Latarnik Wyborczy porówna Twoje odpowiedzi z deklaracjami komitetów wyborczych i{" "}
        <strong>pokaże Ci procentową zgodność Waszych poglądów.</strong>
      </p>
    </div>
  </div>

  {/* Button */}
  <button
    onClick={() => navigate("/login")}
    className="mt-10 px-8 py-3 text-sm font-bold border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-200"
  >
    ROZPOCZNIJ TEST
  </button>
</div>

    );
};

export default LandingPage;