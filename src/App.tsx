import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { Language } from './data/content';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PracticeAreas } from './pages/PracticeAreas';
import { Lawyers } from './pages/Lawyers';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { Terms } from './pages/Terms';
import './App.css';

function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/practice-areas" element={<PracticeAreas lang={lang} />} />
          <Route path="/lawyers" element={<Lawyers lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/blogs" element={<Blogs lang={lang} />} />
          <Route path="/terms" element={<Terms lang={lang} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
