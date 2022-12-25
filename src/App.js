import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Edit from './pages/Edit';
import Preview from './pages/Preview';

function App() {
  const [text, setText] = useState("");
  return (
    <div className='main'>
      <Header />

      <Routes>
        <Route path="/" element={<Edit text={text} setText={setText} />} />
        <Route path="/preview" element={<Preview text={text} setText={setText} />} />
      </Routes>
    </div>


  );
}

export default App;
