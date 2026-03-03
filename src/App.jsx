import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts'; // ← Теперь используется!

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <main className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* ← Используется! */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* ← Используется! */}
            <Route path="/contacts" element={<Contacts />} /> {/* ← Используется! */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-gray-500">404 - Страница не найдена</div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
