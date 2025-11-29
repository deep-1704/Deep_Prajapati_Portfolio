import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import educationData from '../../data/education.json';

const Education = () => {
    return (
        <section id="education" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Education /&gt;
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 grid gap-8 md:grid-cols-2">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/50 p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-accent">
                                <FaGraduationCap className="text-2xl" />
                                <h3 className="text-xl font-bold leading-tight">{edu.degree}</h3>
                            </div>

                            <div className="flex items-center gap-2 text-white mb-2">
                                <FaUniversity className="text-gray-500" />
                                <span className="font-semibold">{edu.institution}</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-4">{edu.location}</p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-4">
                            <span className="font-mono text-gray-300 bg-white/5 px-3 py-1 rounded">
                                {edu.year}
                            </span>
                            <span className="font-mono text-accent font-bold">
                                {edu.score}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
