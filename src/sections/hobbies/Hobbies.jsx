import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaUtensils } from 'react-icons/fa';
import hobbiesData from '../../data/hobbies.json';

const iconMap = {
    FaGamepad: <FaGamepad />,
    FaUtensils: <FaUtensils />
};

const Hobbies = () => {
    return (
        <section id="hobbies" className="min-h-screen py-20 flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold mb-16 text-center font-mono text-accent px-4"
            >
                &lt;Stuff I do after hearing: "It works on my machine" /&gt;
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
                {hobbiesData.map((hobby, index) => (
                    <motion.div
                        key={hobby.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 rounded-xl border border-gray-800 overflow-hidden flex flex-col"
                    >
                        <div className="p-6 border-b border-gray-800 flex items-center gap-4">
                            <div className="text-3xl text-accent">
                                {iconMap[hobby.icon]}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{hobby.name}</h3>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            {hobby.id === 'gaming' && (
                                <div className="space-y-4">
                                    <div className="bg-black/40 p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-accent font-mono text-lg mb-2">{hobby.details.game}</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-500 block">Main Agent</span>
                                                <span className="text-white font-bold">{hobby.details.main}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500 block">Rank</span>
                                                <span className="text-white font-bold">{hobby.details.rank}</span>
                                            </div>
                                            <div className="col-span-2">
                                                <span className="text-gray-500 block">Username</span>
                                                <span className="text-white font-mono bg-white/10 px-2 py-1 rounded inline-block mt-1">
                                                    {hobby.details.username}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {hobby.id === 'cooking' && (
                                <div className="flex flex-col h-full">
                                    <p className="text-gray-300 mb-6">{hobby.description}</p>

                                    {/* Carousel Container */}
                                    <div className="relative flex-1 overflow-hidden group">
                                        <motion.div
                                            className="flex gap-4 absolute left-0"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{
                                                repeat: Infinity,
                                                ease: "linear",
                                                duration: 20
                                            }}
                                            style={{ width: "fit-content" }}
                                        >
                                            {/* Double the items for seamless loop */}
                                            {[...hobby.gallery, ...hobby.gallery].map((item, i) => (
                                                <div key={i} className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                        <span className="text-white font-bold text-sm text-center px-2">{item.name}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;
