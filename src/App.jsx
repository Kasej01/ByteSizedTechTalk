import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
