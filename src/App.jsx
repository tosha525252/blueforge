import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EightAM from './pages/EightAM';
import Architect from './pages/Architect';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/8am" element={<EightAM />} />
        <Route path="/architect" element={<Architect />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
