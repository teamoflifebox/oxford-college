import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [stars, setStars] = useState(0);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', { stars, note });
      setSuccess(true);
      setStars(0);
      setNote('');
    } catch (err) {
      console.error('Error submitting feedback', err);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">⭐ Give Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setStars(star)}
              className={`cursor-pointer text-2xl ${star <= stars ? 'text-yellow-400' : 'text-gray-400'}`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your feedback..."
          className="w-full p-2 border rounded mb-4"
          rows={4}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {success && <p className="text-green-500 mt-4">Thank you for your feedback!</p>}
    </div>
  );
};

export default FeedbackForm;
