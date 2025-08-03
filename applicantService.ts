
import type { Applicant } from '../types';

const APPLICANTS_STORAGE_KEY = 'bastiKiPathshala_applicants';

export const getApplicants = (): Promise<Applicant[]> => {
  return new Promise((resolve) => {
    try {
      const applicantsJson = localStorage.getItem(APPLICANTS_STORAGE_KEY);
      const applicants = applicantsJson ? JSON.parse(applicantsJson) : [];
      resolve(applicants);
    } catch (error) {
      console.error("Failed to retrieve applicants from localStorage", error);
      resolve([]);
    }
  });
};

export const addApplicant = (applicantData: Omit<Applicant, 'id' | 'submittedAt'>): Promise<Applicant> => {
  return new Promise((resolve, reject) => {
    try {
      getApplicants().then(applicants => {
        const newApplicant: Applicant = {
          ...applicantData,
          id: `app_${new Date().getTime()}`,
          submittedAt: new Date().toISOString(),
        };
        const updatedApplicants = [...applicants, newApplicant];
        localStorage.setItem(APPLICANTS_STORAGE_KEY, JSON.stringify(updatedApplicants));
        resolve(newApplicant);
      });
    } catch (error) {
      console.error("Failed to save applicant to localStorage", error);
      reject(error);
    }
  });
};
