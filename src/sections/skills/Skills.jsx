import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills.json';

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Skills /&gt;
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {skillsData.categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-white/5 text-gray-300 rounded text-sm font-mono hover:bg-accent/10 hover:text-accent transition-colors duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
