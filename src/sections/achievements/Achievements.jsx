import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import achievementsData from '../../data/achievements.json';

const Achievements = () => {
    return (
        <section id="achievements" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Achievements /&gt;
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 space-y-6">
                {achievementsData.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-xl border border-gray-800 flex items-start gap-6 hover:bg-secondary/50 transition-colors duration-300"
                    >
                        <div className="p-3 bg-accent/10 rounded-lg text-accent">
                            <FaTrophy className="text-2xl" />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-baseline gap-x-4 mb-1">
                                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                                <span className="text-sm font-mono text-gray-500">{achievement.date}</span>
                            </div>
                            <p className="text-accent/80 font-medium mb-2">{achievement.organization}</p>
                            <p className="text-gray-400">{achievement.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
