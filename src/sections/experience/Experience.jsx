import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import experienceData from '../../data/experience.json';
import { formatDate, calculateDuration } from '../../utils/dateUtils';

// Dynamically import all images from assets folder
const assets = require.context('../../assets', false, /\.(png|jpe?g|svg)$/);

const getAssetPath = (path) => {
    try {
        // Extract filename from the path (works for both absolute and relative paths)
        const filename = path.split('/').pop();
        // Find the matching image in the context
        return assets(`./${filename}`);
    } catch (err) {
        console.warn(`Image not found: ${path}`);
        return path; // Fallback to original path (e.g. for external URLs)
    }
};

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Experience /&gt;
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 space-y-12">
                {experienceData.map((company, index) => (
                    <motion.div
                        key={company.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-secondary/50 rounded-xl border border-gray-800 overflow-hidden"
                    >
                        {/* Company Header */}
                        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-gray-800 bg-white/5">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                                <img
                                    src={company.logo.startsWith('http') ? company.logo : getAssetPath(company.logo)}
                                    alt={`${company.company} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {company.company}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 font-mono text-sm">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        <span>
                                            {formatDate(company.duration.start)} - {formatDate(company.duration.end)}
                                        </span>
                                    </div>
                                    <span className="hidden md:inline text-gray-600">•</span>
                                    <span className="text-accent">
                                        {calculateDuration(company.duration.start, company.duration.end)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Positions */}
                        <div className="p-6 md:p-8 space-y-8 relative">
                            {/* Vertical Line connecting positions */}
                            {company.positions.length > 1 && (
                                <div className="absolute left-9 md:left-11 top-8 bottom-8 w-0.5 bg-gray-800"></div>
                            )}

                            {company.positions.map((position, posIndex) => (
                                <div key={position.id} className="relative pl-8 md:pl-10">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1.5 md:left-3.5 top-2 w-3 h-3 bg-accent rounded-full border-2 border-secondary z-10"></div>

                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                                        <h4 className="text-xl font-bold text-accent">
                                            {position.title}
                                        </h4>
                                        {position.duration ? (
                                            <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                                                <span>{formatDate(position.duration.start)} - {formatDate(position.duration.end)}</span>
                                                <span className="text-gray-600">•</span>
                                                <span className="text-accent/80">
                                                    {calculateDuration(position.duration.start, position.duration.end)}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-sm font-mono text-gray-500">
                                                {position.date}
                                            </span>
                                        )}
                                    </div>

                                    <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
                                        {position.responsibilities.map((item, i) => (
                                            <li key={i} className="leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
