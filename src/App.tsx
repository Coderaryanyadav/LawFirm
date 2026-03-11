import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import type { Language } from './data/content';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PracticeAreas } from './pages/PracticeAreas';
import { Lawyers } from './pages/Lawyers';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { Terms } from './pages/Terms';
import { LawyerProfile } from './pages/LawyerProfile';
import { Preloader } from './components/Preloader';
import './App.css';

function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
      <Preloader lang={lang} />
      <div className="noise-overlay"></div>
      <Layout lang={lang} setLang={setLang}>
        <RoutesContainer lang={lang} />
      </Layout>
    </BrowserRouter>
  );
}

const RoutesContainer = ({ lang }: { lang: Language }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/practice-areas" element={<PracticeAreas lang={lang} />} />
        <Route path="/lawyers" element={<Lawyers lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="/blogs" element={<Blogs lang={lang} />} />
        <Route path="/terms" element={<Terms lang={lang} />} />
        <Route path="/lawyer/:id" element={<LawyerProfile lang={lang} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
