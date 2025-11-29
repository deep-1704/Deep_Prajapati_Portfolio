import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import projectsData from '../../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt;Projects /&gt;
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group bg-secondary/30 rounded-xl border border-gray-800 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-2 bg-secondary/50' : ''
                            }`}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <FaFolder className="text-4xl text-accent/80 group-hover:text-accent transition-colors" />
                                <div className="flex gap-4 text-gray-400">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        <FaExternalLinkAlt className="text-lg" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-gray-500">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
