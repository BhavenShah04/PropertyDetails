import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertyDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;