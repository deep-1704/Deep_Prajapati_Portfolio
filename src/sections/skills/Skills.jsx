import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBriefcase, FaCode, FaLaptopCode, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa';
import skillsData from '../../data/skills.json';
import experienceData from '../../data/experience.json';
import projectsData from '../../data/projects.json';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skillUsage, setSkillUsage] = useState({ experience: [], majorProjects: [], learningProjects: [] });
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        if (selectedSkill) {
            document.body.style.overflow = 'hidden';

            // Determine target skills (single skill or all skills in category)
            let targetSkills = [selectedSkill];
            const category = skillsData.categories.find(c => c.title === selectedSkill);
            if (category) {
                targetSkills = category.skills;
            }

            // Filter Experience
            const experience = [];
            experienceData.forEach(company => {
                company.positions.forEach(pos => {
                    if (pos.techStack && pos.techStack.some(t => targetSkills.includes(t))) {
                        experience.push({
                            company: company.company,
                            title: pos.title,
                            date: pos.date,
                            techStack: pos.techStack,
                            id: pos.id
                        });
                    }
                });
            });

            // Filter Projects
            const majorProjects = projectsData.filter(p =>
                p.type === 'Major' && (
                    p.techStack.some(t => targetSkills.includes(t)) ||
                    (p.additionalTechStack && p.additionalTechStack.some(t => targetSkills.includes(t)))
                )
            );

            const learningProjects = projectsData.filter(p =>
                p.type === 'Learning' && (
                    p.techStack.some(t => targetSkills.includes(t)) ||
                    (p.additionalTechStack && p.additionalTechStack.some(t => targetSkills.includes(t)))
                )
            );

            setSkillUsage({ experience, majorProjects, learningProjects });
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedSkill]);

    const handleNavigation = (sectionId) => {
        setSelectedSkill(null);
        // Small timeout to allow sidebar to close and body scroll to unlock
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section id="skills" className="min-h-screen py-20 flex flex-col justify-center relative">
            <div className="relative flex justify-center items-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold font-mono text-accent"
                >
                    &lt;Skills /&gt;
                </motion.h2>
                <div
                    className="ml-4 relative"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                >
                    <FaInfoCircle className="text-gray-500 hover:text-accent transition-colors cursor-help text-xl" />
                    <AnimatePresence>
                        {showInfo && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute right-[-1rem] md:left-1/2 md:-translate-x-1/2 bottom-full mb-2 w-64 bg-gray-800 text-gray-300 text-xs p-3 rounded-lg shadow-xl border border-gray-700 text-center z-10 pointer-events-none"
                            >
                                Click on any skill or category card to view detailed usage in projects and experience.
                                <div className="absolute right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillsData.categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        onClick={() => setSelectedSkill(category.title)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-colors duration-300 cursor-pointer group"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSkill(skill);
                                    }}
                                    className="px-3 py-1 bg-white/5 text-gray-300 rounded text-sm font-mono hover:bg-accent/10 hover:text-accent transition-colors duration-200 cursor-pointer"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedSkill && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setSelectedSkill(null)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0 }}
                            dragElastic={{ left: 0, right: 0.5 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.x > 100 || velocity.x > 500) {
                                    setSelectedSkill(null);
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
                                    onClick={() => setSelectedSkill(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes className="text-2xl" />
                                </button>

                                <h3 className="text-3xl font-bold text-accent mb-2 mt-4 font-mono">
                                    {selectedSkill}
                                </h3>
                                <p className="text-gray-400 mb-8 text-sm">Usage & Experience</p>

                                {/* Professional Experience */}
                                {skillUsage.experience.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-4 text-white">
                                            <FaBriefcase className="text-accent" />
                                            <h4 className="text-xl font-bold">Professional Experience</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.experience.map((exp, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => handleNavigation(`experience-${exp.id}`)}
                                                    className="bg-white/5 p-4 rounded-lg border border-gray-800 cursor-pointer hover:bg-white/10 transition-colors group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <h5 className="font-bold text-white group-hover:text-accent transition-colors">{exp.title}</h5>
                                                        <FaExternalLinkAlt className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-gray-400 text-sm mb-2">{exp.company} | {exp.date}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {exp.techStack.map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2 py-1 rounded ${isSelected ? 'bg-accent/20 text-accent' : 'bg-black/20 text-gray-500'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Major Projects */}
                                {skillUsage.majorProjects.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-4 text-white">
                                            <FaLaptopCode className="text-accent" />
                                            <h4 className="text-xl font-bold">Major Projects</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.majorProjects.map((proj) => (
                                                <div
                                                    key={proj.id}
                                                    onClick={() => handleNavigation(`project-${proj.id}`)}
                                                    className="bg-white/5 p-4 rounded-lg border border-gray-800 cursor-pointer hover:bg-white/10 transition-colors group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <h5 className="font-bold text-white group-hover:text-accent transition-colors">{proj.title}</h5>
                                                        <FaExternalLinkAlt className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-gray-400 text-sm mb-2">{proj.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {[...proj.techStack, ...(proj.additionalTechStack || [])].map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2 py-1 rounded ${isSelected ? 'bg-accent/20 text-accent' : 'bg-black/20 text-gray-500'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Learning Projects */}
                                {skillUsage.learningProjects.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-4 text-white">
                                            <FaCode className="text-accent" />
                                            <h4 className="text-xl font-bold">Learning Projects</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.learningProjects.map((proj) => (
                                                <div key={proj.id} className="bg-white/5 p-4 rounded-lg border border-gray-800">
                                                    <h5 className="font-bold text-white">{proj.title}</h5>
                                                    <p className="text-gray-400 text-sm mb-2">{proj.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {[...proj.techStack, ...(proj.additionalTechStack || [])].map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2 py-1 rounded ${isSelected ? 'bg-accent/20 text-accent' : 'bg-black/20 text-gray-500'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {skillUsage.experience.length === 0 && skillUsage.majorProjects.length === 0 && skillUsage.learningProjects.length === 0 && (
                                    <div className="text-center text-gray-500 py-10">
                                        <p>No specific projects or experience listed for this skill yet.</p>
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

export default Skills;
