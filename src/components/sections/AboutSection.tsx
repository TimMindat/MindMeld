import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from '../Link';

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://i.imgur.com/mR0OhXA.jpeg"
            alt="Abdeltawab"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Hi, I'm Abdeltawab! A passionate AI enthusiast dedicated to simplifying Machine Learning concepts through practical projects and easy-to-follow tutorials.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}