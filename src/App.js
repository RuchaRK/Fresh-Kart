import './App.css';
import Mockman from 'mockman-js';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
