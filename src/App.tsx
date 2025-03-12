import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Events from './pages/Events';
import Archives from './pages/Archives';
import Team from './pages/Team';
import Spectrum from './pages/Spectrum';
import EventPopup from './components/EventPopup';
import HolidayPopup from './components/HolidayPopup';
import Chatbot from './components/Chatbot';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/events" element={<Events />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/team" element={<Team />} />
            <Route path="/spectrum" element={<Spectrum />} />
          </Routes>
        </main>
        <Footer />
        <EventPopup />
        <HolidayPopup />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;