import React from 'react';
import { FileText, Book, Database } from 'lucide-react';
import { ResourceCard } from '../ResourceCard';

const FEATURED_RESOURCES = [
  {
    title: 'ML Algorithms Cheat Sheet',
    description: 'Quick reference guide for common machine learning algorithms.',
    type: 'download',
    url: '#',
    icon: <FileText className="w-8 h-8" />
  },
  {
    title: 'Python for Data Science',
    description: 'Comprehensive guide to Python for ML and Data Science.',
    type: 'link',
    url: '#',
    icon: <Book className="w-8 h-8" />
  },
  {
    title: 'Dataset Collection',
    description: 'Curated datasets for practice and projects.',
    type: 'link',
    url: '#',
    icon: <Database className="w-8 h-8" />
  }
] as const;

export function ResourcesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Learning Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RESOURCES.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}