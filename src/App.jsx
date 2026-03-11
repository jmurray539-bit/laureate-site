import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaureateHomepage from './pages/laureate_homepage_v5';
import LaureateAbout from './pages/laureate_about';
import LaureateAgencies from './pages/laureate_agencies';
import LaureateContact from './pages/laureate_contact';
import LaureateEditors from './pages/laureate_editors';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaureateHomepage />} />
        <Route path="/about" element={<LaureateAbout />} />
        <Route path="/agencies" element={<LaureateAgencies />} />
        <Route path="/contact" element={<LaureateContact />} />
        <Route path="/editors" element={<LaureateEditors />} />
      </Routes>
    </BrowserRouter>
  );
}
