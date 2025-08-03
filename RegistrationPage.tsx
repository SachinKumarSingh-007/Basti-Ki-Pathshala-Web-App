
import React, { useState } from 'react';
import type { Applicant } from '../types';
import { generateThankYouMessage } from '../services/geminiService';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';

interface RegistrationPageProps {
  addApplicant: (applicant: Omit<Applicant, 'id' | 'submittedAt'>) => Promise<Applicant>;
}

type FormState = 'idle' | 'submitting' | 'generating' | 'success' | 'error';

const RegistrationPage: React.FC<RegistrationPageProps> = ({ addApplicant }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Intern' | 'Volunteer'>('Volunteer');
  const [reason, setReason] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !role || !reason) {
      setErrorMessage('Please fill in all required fields.');
      setFormState('error');
      return;
    }
    
    setFormState('submitting');
    setErrorMessage('');

    try {
      const newApplicantData = { fullName, email, phone, role, reason };
      await addApplicant(newApplicantData);
      
      setFormState('generating');
      const message = await generateThankYouMessage(fullName);
      setThankYouMessage(message);
      setFormState('success');

      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setRole('Volunteer');
      setReason('');

    } catch (error) {
      console.error("Submission failed:", error);
      setErrorMessage('There was an error submitting your application. Please try again.');
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
        <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Thank You!</h2>
            <p className="text-neutral-700 whitespace-pre-wrap">{thankYouMessage}</p>
            <Button onClick={() => setFormState('idle')} className="mt-6">Submit another application</Button>
        </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-primary-dark mb-6">Join Our Team</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input id="fullName" label="Full Name*" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required />
        <Input id="email" label="Email Address*" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input id="phone" label="Phone Number" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">I want to apply as a*</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="role" value="Volunteer" checked={role === 'Volunteer'} onChange={() => setRole('Volunteer')} className="focus:ring-primary-light h-4 w-4 text-primary-light border-neutral-300"/>
              <span className="ml-2 text-neutral-700">Volunteer</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="role" value="Intern" checked={role === 'Intern'} onChange={() => setRole('Intern')} className="focus:ring-primary-light h-4 w-4 text-primary-light border-neutral-300"/>
              <span className="ml-2 text-neutral-700">Intern</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-1">
            Why do you want to join us?*
          </label>
          <textarea id="reason" rows={4} value={reason} onChange={e => setReason(e.target.value)} required
            className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm transition"
          />
        </div>

        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

        <div className="flex justify-end items-center gap-4">
          {(formState === 'submitting' || formState === 'generating') && (
            <div className="flex items-center gap-2 text-neutral-600">
                <Spinner />
                <span>{formState === 'submitting' ? 'Submitting...' : 'Generating message...'}</span>
            </div>
          )}
          <Button type="submit" disabled={formState === 'submitting' || formState === 'generating'}>
            Submit Application
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default RegistrationPage;
