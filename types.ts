
export interface Applicant {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: 'Intern' | 'Volunteer';
  reason: string;
  submittedAt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
