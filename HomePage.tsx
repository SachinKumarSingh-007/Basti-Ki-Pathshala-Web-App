
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import type { Testimonial } from '../types';


const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="text-center h-full">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-white">{icon}</div>
        <h3 className="mt-6 text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-base text-neutral-600">{description}</p>
    </Card>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <Card className="flex flex-col bg-neutral-50 h-full">
        <div className="flex-grow">
            <p className="text-neutral-600 italic">"{testimonial.quote}"</p>
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200">
            <p className="font-bold text-neutral-800">{testimonial.author}</p>
            <p className="text-sm text-secondary-dark font-semibold">{testimonial.role}</p>
        </div>
    </Card>
);

const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;

const testimonials: Testimonial[] = [
  {
    quote: "Volunteering at Basti Ki Pathshala has been the most rewarding experience of my life. Seeing the children's faces light up when they learn something new is priceless.",
    author: 'Priya Sharma',
    role: 'Volunteer',
  },
  {
    quote: "The structured internship program gave me real-world experience in community development and education. I'm grateful for the opportunity to contribute to such a meaningful cause.",
    author: 'Rahul Verma',
    role: 'Intern',
  },
    {
    quote: "The impact this NGO has on the community is tangible. The children are not just learning academics; they're gaining confidence and dreaming of a better future.",
    author: 'Anjali Desai',
    role: 'Community Partner',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494822491016-a9e334a1eb45?q=80&w=870&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=774&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=870&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop',
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center bg-white p-10 rounded-xl shadow-lg bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop')"}}>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark tracking-tight">
            Welcome to <span className="text-secondary-dark">Basti Ki Pathshala</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
            Empowering underprivileged children through the gift of education. Join us in making a difference, one child at a time.
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <Link to="/register">
              <Button variant="primary" className="text-lg px-8 py-3">
                Get Involved
              </Button>
            </Link>
             <Link to="/donate">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-10">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BookIcon />}
            title="Quality Education"
            description="We provide free, high-quality education to children in underserved communities, focusing on holistic development."
          />
          <FeatureCard 
            icon={<UsersIcon />}
            title="Community Building"
            description="Our centers are safe spaces that foster learning, creativity, and a strong sense of community among children and volunteers."
          />
          <FeatureCard 
            icon={<HeartIcon />}
            title="Passionate Volunteers"
            description="Our work is powered by the dedication of interns and volunteers who share their knowledge, time, and compassion."
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-white rounded-xl shadow-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-800 mb-10">What Our Team Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
            </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-10">Glimpses of Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-w-1 aspect-h-1">
                    <img src={src} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
