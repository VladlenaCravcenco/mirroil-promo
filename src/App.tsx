import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CherryMan from './pages/CherryMan';
import NudeAllure from './pages/NudeAllure';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mirroil-cherry-men" replace />} />
        <Route path="/mirroil-cherry-men" element={<CherryMan />} />
        <Route path="/mirroil-nude-allure" element={<NudeAllure />} />
        <Route path="*" element={<Navigate to="/mirroil-cherry-men" replace />} />
      </Routes>
    </BrowserRouter>
  );
}