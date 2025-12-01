import React from 'react';
import { FaHome, FaCode, FaBriefcase, FaFolderOpen, FaTrophy, FaEnvelope, FaGraduationCap, FaGamepad, FaTerminal } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Sidebar = () => {
    const navItems = [
        { path: '#intro', icon: <FaHome />, label: 'Intro' },
        { path: '#experience', icon: <FaBriefcase />, label: 'Experience' },
        { path: '#education', icon: <FaGraduationCap />, label: 'Education' },
        { path: '#projects', icon: <FaFolderOpen />, label: 'Projects' },
        { path: '#skills', icon: <FaCode />, label: 'Skills' },
        { path: '#achievements', icon: <FaTrophy />, label: 'Achievements' },
        { path: '#hobbies', icon: <FaGamepad />, label: 'Hobbies' },
        { path: '#contact', icon: <FaEnvelope />, label: 'Contact' },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen bg-secondary fixed left-0 top-0 border-r border-gray-800 z-50">
            <div className="p-8 flex items-center justify-center border-b border-gray-800">
                <FaTerminal className="text-4xl text-accent" />
            </div>

            <nav className="flex-1 overflow-y-auto py-6">
                <ul className="space-y-2 px-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <HashLink
                                smooth
                                to={item.path}
                                className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors duration-200 text-gray-400 hover:bg-white/5 hover:text-white focus:text-accent"
                                activeClassName="bg-accent/10 text-accent"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-6 border-t border-gray-800">
                <div className="flex justify-center gap-4 text-gray-400">
                    {/* Social links will go here */}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
