import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaGamepad, FaBook, FaPlane, FaMusic, FaCode } from 'react-icons/fa';
import hobbiesData from '../../data/hobbies.json';

const iconMap = {
    FaCamera: <FaCamera />,
    FaGamepad: <FaGamepad />,
    FaBook: <FaBook />,
    FaPlane: <FaPlane />,
    FaMusic: <FaMusic />,
    FaCode: <FaCode />
};

const Hobbies = () => {
    return (
        <section id="hobbies" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Hobbies /&gt;
            </motion.h2>

            <div className="max-w-5xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4">
                {hobbiesData.map((hobby, index) => (
                    <motion.div
                        key={hobby.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="text-4xl text-gray-500 mb-4 group-hover:text-accent transition-colors duration-300">
                            {iconMap[hobby.icon] || <FaCode />}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{hobby.name}</h3>
                        <p className="text-sm text-gray-400">{hobby.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;
