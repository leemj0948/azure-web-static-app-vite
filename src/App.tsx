import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Info from './pages/info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/info" element={<Info/>} />
       
      </Routes>
    </Router>
  );
}

export default App;