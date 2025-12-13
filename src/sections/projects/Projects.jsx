import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaTimes, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projectsData from '../../data/projects.json';

// Dynamically import all images from assets folder
const assets = require.context('../../assets', true, /\.(png|jpe?g|svg)$/);

const getAssetPath = (path) => {
    try {
        // Remove ../assets/ prefix if present and ensure ./ prefix
        const cleanPath = path.replace('../assets/', '').replace(/^\//, '');
        return assets(`./${cleanPath}`);
    } catch (err) {
        console.error(`Error loading image: ${path}`, err);
        return path;
    }
};

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const selectedProject = projectsData.find(p => p.id === selectedId);

    const nextImage = () => {
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedId]);

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);

    return (
        <section id="projects" className="min-h-screen py-20 flex flex-col justify-center relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-16 text-center font-mono text-accent"
            >
                &lt; Major Projects / &gt;
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.filter(project => project.type === "Major").map((project, index) => (
                    <motion.div
                        key={project.id}
                        id={`project-${project.id}`}
                        layoutId={`card - container - ${project.id} `}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedId(project.id)}
                        className={`group bg-secondary/30 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300 flex flex-col cursor-pointer ${project.featured ? 'md:col-span-2 lg:col-span-2 bg-secondary/50' : ''}`}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <FaFolder className="text-4xl text-accent/80 group-hover:text-accent transition-colors" />
                            </div>

                            <motion.h3 layoutId={`card - title - ${project.id} `} className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {project.title}
                            </motion.h3>

                            <p className="text-gray-400 mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-gray-500">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <motion.button
                                layoutId={`card - button - ${project.id} `}
                                className="mt-auto self-start flex items-center gap-2 text-accent font-mono text-sm hover:underline underline-offset-4"
                            >
                                Know more <FaArrowRight className="text-xs" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <>
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setSelectedId(null)}
                        />

                        {/* Highlighted Card (Left Side) */}
                        <div className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center md:justify-start md:pl-20 lg:pl-32">
                            <motion.div
                                layoutId={`card - container - ${selectedId} `}
                                className="bg-secondary border border-gray-800 rounded-xl p-6 w-[90%] md:w-[400px] pointer-events-auto shadow-2xl"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <FaFolder className="text-4xl text-accent" />
                                </div>
                                <motion.h3 layoutId={`card - title - ${selectedId} `} className="text-2xl font-bold text-white mb-4">
                                    {selectedProject.title}
                                </motion.h3>
                                <p className="text-gray-300 mb-6">
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.techStack.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Sidebar (Details) */}
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0 }}
                            dragElastic={{ left: 0, right: 0.5 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.x > 100 || velocity.x > 500) {
                                    setSelectedId(null);
                                }
                            }}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] bg-secondary border-l border-gray-800 z-[70] overflow-y-auto shadow-2xl"
                        >
                            <div className="p-8">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes className="text-2xl" />
                                </button>

                                <h3 className="text-2xl font-bold text-white mb-8 mt-4 font-mono">
                                    &lt;ProjectDetails /&gt;
                                </h3>

                                {/* Features */}
                                <div className="mb-10">
                                    <h4 className="text-xl font-bold text-accent mb-4">Key Features</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Links */}
                                <div className="mb-10">
                                    <h4 className="text-xl font-bold text-accent mb-4">Links</h4>
                                    <div className="flex gap-4">
                                        {selectedProject.links.github && (
                                            <a
                                                href={selectedProject.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors text-white"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {selectedProject.links.live && (
                                            <a
                                                href={selectedProject.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Image Carousel */}
                                {selectedProject.images && selectedProject.images.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-accent mb-4">Gallery</h4>
                                        <div className="flex flex-col gap-4">
                                            <div className="relative rounded-lg overflow-hidden border border-gray-800 group/carousel">
                                                <img
                                                    src={getAssetPath(selectedProject.images[currentImageIndex])}
                                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>

                                            {selectedProject.images.length > 1 && (
                                                <div className="flex items-center justify-center gap-4">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            prevImage();
                                                        }}
                                                        className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                                                    >
                                                        <FaChevronLeft />
                                                    </button>

                                                    {/* Dots Indicator */}
                                                    <div className="flex gap-2">
                                                        {selectedProject.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setCurrentImageIndex(index);
                                                                }}
                                                                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-accent' : 'bg-gray-600 hover:bg-gray-500'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            nextImage();
                                                        }}
                                                        className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                                                    >
                                                        <FaChevronRight />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
