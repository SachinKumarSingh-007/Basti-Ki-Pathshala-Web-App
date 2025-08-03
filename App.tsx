
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import type { Applicant } from './types';
import { getApplicants, addApplicant as saveApplicant } from './services/applicantService';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import AdminPage from './pages/AdminPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      const existingApplicants = await getApplicants();
      setApplicants(existingApplicants);
    };
    fetchApplicants();
  }, []);

  const addApplicant = async (applicant: Omit<Applicant, 'id' | 'submittedAt'>) => {
    const newApplicant = await saveApplicant(applicant);
    setApplicants(prev => [...prev, newApplicant]);
    return newApplicant;
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-neutral-100 text-neutral-800 font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage addApplicant={addApplicant} />} />
            <Route path="/admin" element={<AdminPage applicants={applicants} />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
