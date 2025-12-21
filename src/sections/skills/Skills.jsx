import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBriefcase, FaCode, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import skillsData from '../../data/skills.json';
import experienceData from '../../data/experience.json';
import projectsData from '../../data/projects.json';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skillUsage, setSkillUsage] = useState({ experience: [], majorProjects: [], learningProjects: [] });


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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="skills" className="min-h-screen py-20 flex flex-col justify-center relative">

            <div className="relative flex justify-center items-center mb-16 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold font-mono text-accent"
                >
                    &lt;Skills /&gt;
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 relative z-10"
            >
                {skillsData.categories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        onClick={() => setSelectedSkill(category.title)}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-accent/50 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer group flex flex-col h-full"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/10 group-hover:border-accent/50 transition-colors flex justify-between items-center">
                            {category.title}
                            <span className="text-accent/0 group-hover:text-accent/100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                →
                            </span>
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    layoutId={skill} // Potential for shared layout animation, but strictly used for identification here
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSkill(skill);
                                    }}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-mono border border-transparent hover:border-accent/30 hover:text-accent hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-colors duration-200 cursor-pointer"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedSkill && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
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
                            initial={{ x: '100%', opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] bg-[#0f0f0f] border-l border-white/10 z-[70] overflow-y-auto shadow-2xl"
                        >
                            <div className="p-8">
                                <button
                                    onClick={() => setSelectedSkill(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes className="text-xl" />
                                </button>

                                <div className="mt-8 mb-8">
                                    <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 mb-2 font-mono">
                                        {selectedSkill}
                                    </h3>
                                    <p className="text-gray-400 text-sm">Detailed Usage & Experience</p>
                                </div>

                                {/* Professional Experience */}
                                {skillUsage.experience.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-2">
                                            <FaBriefcase className="text-accent" />
                                            <h4 className="text-xl font-bold">Professional Experience</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.experience.map((exp, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    onClick={() => handleNavigation(`experience-${exp.id}`)}
                                                    className="bg-white/5 p-5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 hover:border-accent/30 transition-all group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <h5 className="font-bold text-white group-hover:text-accent transition-colors text-lg">{exp.title}</h5>
                                                        <FaExternalLinkAlt className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-gray-400 text-sm mb-3 mt-1">{exp.company} | {exp.date}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {exp.techStack.map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-mono ${isSelected ? 'bg-accent/20 text-accent border border-accent/20' : 'bg-black/40 text-gray-500 border border-transparent'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Major Projects */}
                                {skillUsage.majorProjects.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-2">
                                            <FaLaptopCode className="text-accent" />
                                            <h4 className="text-xl font-bold">Major Projects</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.majorProjects.map((proj, idx) => (
                                                <motion.div
                                                    key={proj.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    onClick={() => handleNavigation(`project-${proj.id}`)}
                                                    className="bg-white/5 p-5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 hover:border-accent/30 transition-all group"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <h5 className="font-bold text-white group-hover:text-accent transition-colors text-lg">{proj.title}</h5>
                                                        <FaExternalLinkAlt className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-gray-400 text-sm mb-3 mt-1">{proj.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {[...proj.techStack, ...(proj.additionalTechStack || [])].map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-mono ${isSelected ? 'bg-accent/20 text-accent border border-accent/20' : 'bg-black/40 text-gray-500 border border-transparent'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Learning Projects */}
                                {skillUsage.learningProjects.length > 0 && (
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-2">
                                            <FaCode className="text-accent" />
                                            <h4 className="text-xl font-bold">Learning Projects</h4>
                                        </div>
                                        <div className="space-y-4">
                                            {skillUsage.learningProjects.map((proj, idx) => (
                                                <motion.div
                                                    key={proj.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="bg-white/5 p-5 rounded-xl border border-white/10"
                                                >
                                                    <h5 className="font-bold text-white text-lg">{proj.title}</h5>
                                                    <p className="text-gray-400 text-sm mb-3 mt-1">{proj.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {[...proj.techStack, ...(proj.additionalTechStack || [])].map(t => {
                                                            const isSelected = t === selectedSkill || (skillsData.categories.find(c => c.title === selectedSkill)?.skills.includes(t));
                                                            return (
                                                                <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-mono ${isSelected ? 'bg-accent/20 text-accent border border-accent/20' : 'bg-black/40 text-gray-500 border border-transparent'}`}>
                                                                    {t}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {skillUsage.experience.length === 0 && skillUsage.majorProjects.length === 0 && skillUsage.learningProjects.length === 0 && (
                                    <div className="text-center text-gray-500 py-16 bg-white/5 rounded-xl border border-dashed border-gray-800">
                                        <p className="text-lg mb-2">No direct matches found</p>
                                        <p className="text-sm opacity-60">This skill might be used in smaller experiments or general knowledge.</p>
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

