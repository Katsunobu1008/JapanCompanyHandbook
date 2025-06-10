import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyListPage from './pages/CompanyListPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<CompanyListPage />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
