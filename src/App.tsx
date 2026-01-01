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
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-orange-50 to-amber-50 flex flex-col p-4 relative overflow-hidden">
              <Confetti />
              <MusicPlayer />
              <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 relative z-10">
                <div className="bg-white/90 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-2xl relative border border-white/50 hover:shadow-3xl transition-shadow duration-300">
                  <NewYearGreeting
                    recipient={names.recipient}
                    sender={names.sender}
                  />
                </div>
              </div>
              <ShareForm />
              <YearAnimation />
              <div className="text-center mt-8 relative z-10">
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
