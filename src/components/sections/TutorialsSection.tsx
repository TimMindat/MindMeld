import React from 'react';
import { TutorialCard } from '../TutorialCard';

const FEATURED_TUTORIALS = [
  {
    title: 'Neural Networks from Scratch',
    description: 'Build a neural network from the ground up using Python and NumPy.',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    duration: '45 min',
    difficulty: 'Intermediate',
    category: 'Deep Learning'
  },
  {
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML with practical examples.',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    duration: '30 min',
    difficulty: 'Beginner',
    category: 'ML Basics'
  }
] as const;

export function TutorialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Tutorials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TUTORIALS.map((tutorial) => (
            <TutorialCard key={tutorial.title} {...tutorial} />
          ))}
        </div>
      </div>
    </section>
  );
}