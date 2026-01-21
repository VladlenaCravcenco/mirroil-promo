import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CherryMan from './pages/CherryMan';
import NudeAllure from './pages/NudeAllure';
import Thanks from './pages/Thanks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cherry-men" replace />} />
        <Route path="/cherry-men" element={<CherryMan />} />
        <Route path="/nude-allure" element={<NudeAllure />} />
        <Route path="*" element={<Navigate to="/cherry-men" replace />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}