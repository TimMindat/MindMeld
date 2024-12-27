import React from 'react';
import { ContactForm } from '../ContactForm';

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}