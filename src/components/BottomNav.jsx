import React from 'react';
import { FaHome, FaBriefcase, FaCode, FaFolderOpen, FaEnvelope, FaGraduationCap, FaGamepad } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const BottomNav = () => {
    const navItems = [
        { path: '#intro', icon: <FaHome />, label: 'Intro' },
        { path: '#experience', icon: <FaBriefcase />, label: 'Exp' },
        { path: '#education', icon: <FaGraduationCap />, label: 'Edu' },
        { path: '#projects', icon: <FaFolderOpen />, label: 'Proj' },
        { path: '#skills', icon: <FaCode />, label: 'Skills' },
        { path: '#hobbies', icon: <FaGamepad />, label: 'Hobby' },
        { path: '#contact', icon: <FaEnvelope />, label: 'Contact' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary border-t border-gray-800 z-50 pb-safe overflow-x-auto">
            <ul className="flex justify-between items-center h-16 px-4 min-w-max gap-4">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <HashLink
                            smooth
                            to={item.path}
                            className="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white focus:text-accent"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BottomNav;
