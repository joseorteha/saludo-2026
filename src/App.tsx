import { useEffect } from "react";
import { getNamesFromUrl, getCurrentYear } from "./utils/urlParams";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Readme from "./pages/Readme";
import { ShareForm } from "./components/ShareForm";
import { NewYearGreeting } from "./components/NewYearGreeting";
import { YearAnimation } from "./components/YearAnimation";
import { Confetti } from "./components/Confetti";
import { MusicPlayer } from "./components/MusicPlayer";


function App() {
  const names = getNamesFromUrl();
  const currentYear = getCurrentYear();

  useEffect(() => {
    document.title = `¡Feliz Año Nuevo ${currentYear}, ${names.recipient}!`;
  }, [names.recipient, currentYear]);

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex flex-col relative overflow-hidden">
              <Confetti />
              <MusicPlayer />
              
              {/* Main Content */}
              <div className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-8 md:pt-12 pb-4">
                <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-6">
                  <div className="bg-white/60 backdrop-blur-xl p-4 sm:p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl relative border border-white/80 hover:shadow-3xl transition-all duration-300">
                    <NewYearGreeting
                      recipient={names.recipient}
                      sender={names.sender}
                      template={names.template}
                    />
                  </div>
                </div>
              </div>

              {/* Share Form */}
              <div className="pb-24 sm:pb-28 md:pb-32">
                <ShareForm />
              </div>
              
              <YearAnimation />
              
              {/* Footer */}
              <div className="relative z-10 pb-4">
                <Footer />
              </div>
            </div>
          }
        />

        <Route path="/readme" element={<Readme />} />
      </Routes>
    </Router>
  );
}

export default App;
