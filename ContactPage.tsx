
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary-light"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary-light"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary-light"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.message) return;

        setFormState('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormState('idle'), 5000); // Reset form after 5s
        }, 1000);
    };

    return (
        <Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Info Section */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-dark">Get In Touch</h2>
                        <p className="mt-2 text-neutral-600">We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 pt-1"><MapPinIcon /></div>
                            <div>
                                <h3 className="font-semibold text-neutral-800">Our Location</h3>
                                <p className="text-neutral-600">123 Education Lane, New Delhi, 110001, India</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 pt-1"><PhoneIcon /></div>
                             <div>
                                <h3 className="font-semibold text-neutral-800">Phone</h3>
                                <p className="text-neutral-600">+91 123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex-shrink-0 pt-1"><MailIcon /></div>
                            <div>
                                <h3 className="font-semibold text-neutral-800">Email</h3>
                                <p className="text-neutral-600">contact@bastikipathshala.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-6">Send Us a Message</h3>
                    {formState === 'success' ? (
                        <div className="text-center p-4 bg-green-100 text-green-800 rounded-md h-full flex flex-col justify-center">
                            <h4 className="font-semibold text-xl">Message Sent!</h4>
                            <p>Thank you for reaching out. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input id="name" name="name" label="Your Name*" type="text" value={formData.name} onChange={handleChange} required />
                            <Input id="email" name="email" label="Your Email*" type="email" value={formData.email} onChange={handleChange} required />
                            <Textarea id="message" name="message" label="Your Message*" rows={5} value={formData.message} onChange={handleChange} required />
                            <Button type="submit" disabled={formState === 'submitting'}>
                                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ContactPage;
