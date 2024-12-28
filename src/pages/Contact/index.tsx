import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}