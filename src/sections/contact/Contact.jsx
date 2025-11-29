import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import contactData from '../../data/contact.json';
import introData from '../../data/intro.json'; // Keep for name in footer if needed, or move name to contact.json too

const Contact = () => {
    return (
        <section id="contact" className="min-h-[80vh] py-20 flex flex-col justify-center items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl px-4"
            >
                <h2 className="text-accent font-mono text-lg mb-4">08. What's Next?</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{contactData.title}</h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                    {contactData.description}
                </p>

                <a
                    href={contactData.socialLinks.email}
                    className="inline-block px-8 py-4 bg-transparent border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 font-mono font-bold text-lg mb-16"
                >
                    {contactData.cta}
                </a>

                <div className="flex justify-center gap-8 text-2xl text-gray-400">
                    <a href={contactData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all">
                        <FaGithub />
                    </a>
                    <a href={contactData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all">
                        <FaLinkedin />
                    </a>
                    {/* Add more social links if needed */}
                </div>

                <footer className="mt-20 text-sm font-mono text-gray-600">
                    <p>Designed & Built by {introData.name}</p>
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
