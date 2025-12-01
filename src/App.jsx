import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './sections/intro/Intro';

import Experience from './sections/experience/Experience';
import Education from './sections/education/Education';

// Placeholder components
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Achievements from './sections/achievements/Achievements';
import Hobbies from './sections/hobbies/Hobbies';
import Contact from './sections/contact/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <div id="intro" className="min-h-screen flex flex-col justify-center">
                    <Intro />
                </div>
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Achievements />
                <Hobbies />
                <Contact />
            </Layout>
        </Router>
    );
}

export default App;
