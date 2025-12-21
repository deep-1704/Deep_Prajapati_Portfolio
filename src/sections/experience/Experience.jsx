import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../../data/experience.json';
import { formatDate, calculateDuration } from '../../utils/dateUtils';

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Experience /&gt;
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Continuous Vertical Line */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>

                <div className="space-y-12">
                    {experienceData.map((company) => (
                        <div key={company.id}>
                            {company.positions.map((position, index) => (
                                <motion.div
                                    key={position.id}
                                    id={`experience-${position.id}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="relative pl-16 md:pl-24"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[29px] md:left-[45px] top-1.5 w-4 h-4 rounded-full border-4 border-blue-500 bg-primary z-10"></div>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <h3 className="text-2xl font-bold text-white">
                                            {position.title}
                                        </h3>

                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg text-blue-400 font-medium">
                                                    {company.company}
                                                </span>
                                            </div>

                                            <div className="bg-gray-800/80 px-4 py-2 md:py-1 rounded-xl md:rounded-full text-sm font-mono text-gray-300 w-fit">
                                                {position.duration ? (
                                                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                                        <span>{formatDate(position.duration.start)} - {formatDate(position.duration.end)}</span>
                                                        <span className="text-gray-500 text-xs md:text-sm">
                                                            {calculateDuration(position.duration.start, position.duration.end)}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span>{position.date}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 text-gray-400 leading-relaxed">
                                        {position.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-2 w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
