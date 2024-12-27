import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TutorialsSection } from './components/sections/TutorialsSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <TutorialsSection />
        <ResourcesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;