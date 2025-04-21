'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormModal({ isOpen, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);

    // You can replace this with your API call
    setTimeout(() => {
      setLoading(false);
      alert('Message sent!');
      reset();
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            {...register('subject', { required: true })}
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            {...register('message', { required: true })}
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded min-h-[120px]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
