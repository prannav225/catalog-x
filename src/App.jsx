import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ItemDetailPage = lazy(() => import('./pages/ItemDetailPage'));

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-bg text-text selection:bg-accent/30 transition-colors duration-300">
          <Navbar />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/item/:slug" element={<ItemDetailPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

