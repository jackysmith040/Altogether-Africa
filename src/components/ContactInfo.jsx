import React, { useState } from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
import axios from 'axios';

const ContactInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:8000/contact-us', {
                name,
                email,
                phone_number: phoneNumber,  // Ensure field names match backend
                subject,
                message,
            });

            setSuccessMessage('Message sent successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to send message. Please try again.');
            setSuccessMessage('');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12 px-4 lg:px-20">
            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="zoom-in" data-aos-delay="30" data-aos-duration="1500">
                <div className="flex flex-col items-center text-center">
                    <Mail className="text-primary w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Contacts Info</h3>
                    <p>Phone Number: 233 (0) 54 240 3741</p>
                    <p>alltogetherafrica@gmail.com</p>
                </div>
                <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="60" data-aos-duration="1500">
                    <Clock className="text-primary w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Opening Hour</h3>
                    <p>Mon-Fri: 9:30AM - 6:30PM</p>
                    <p>Sat-Sun: 9:30AM - 6:30PM</p>
                </div>
                <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="90" data-aos-duration="1500">
                    <MapPin className="text-primary w-12 h-12 mb-2" />
                    <h3 className="text-lg font-semibold">Service Center</h3>
                    <p>CF443 Apollonia Road, Ghana Flag, Oyarifa</p>
                    <p>Accra, Ghana</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-52 lg:gap-8">
                {/* Google Map Placeholder */}
                <div className="w-full h-64 md:h-96" loading="lazy" data-aos="fade-right" data-aos-duration="1500">
                    {/* Replace with an actual Google Map integration if needed */}
                    <div style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=444&amp;hl=en&amp;q=CF443%20Apollonia%20Road,%20Ghana%20Flag,%20Oyarifa,%20Accra,%20Ghana+(All%20Together%20Africa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                    </div>
                </div>

                {/* Form */}
                <div data-aos="fade-left" data-aos-duration="1500">
                    <h3 className="text-primary uppercase font-semibold mb-4">Talk to Us</h3>
                    <h2 className="text-2xl font-bold mb-6">Do you have any question?</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                className="p-4 border border-gray-300 rounded-md w-full"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                className="p-4 border border-gray-300 rounded-md w-full"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                className="p-4 border border-gray-300 rounded-md w-full"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="p-4 border border-gray-300 rounded-md w-full"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <textarea
                            className="p-4 border border-gray-300 rounded-md w-full"
                            rows="4"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-primary text-white py-3 px-8 rounded-md"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
