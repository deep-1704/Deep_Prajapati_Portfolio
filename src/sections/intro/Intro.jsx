import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import introData from '../../data/intro.json';

const Intro = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-accent font-mono text-lg mb-2">Hi, my name is</h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                        {introData.name}
                    </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className="text-2xl md:text-5xl font-bold text-muted">
                        {introData.role}
                    </h2>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="max-w-xl text-gray-400 text-lg leading-relaxed"
                >
                    {introData.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                    <HashLink
                        smooth
                        to="#experience"
                        className="px-8 py-3 bg-accent text-white rounded hover:bg-accent/80 transition-colors duration-300 font-mono font-bold"
                    >
                        See my journey
                    </HashLink>
                    <HashLink
                        smooth
                        to="#contact"
                        className="px-8 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 font-mono font-bold"
                    >
                        Contact me
                    </HashLink>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Intro;
