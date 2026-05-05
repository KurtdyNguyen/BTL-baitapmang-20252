import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import News from '@/pages/News';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:type" element={<News />} />
        <Route path="/" element={<Navigate to="/news" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
