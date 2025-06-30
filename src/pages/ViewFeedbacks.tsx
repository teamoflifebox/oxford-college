import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('/api/feedback').then((res) => setFeedbacks(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📢 All Student Feedbacks</h2>
      <div className="space-y-4">
        {feedbacks.map((f: any, i: number) => (
          <div key={i} className="bg-white p-4 border rounded shadow">
            <div className="text-yellow-500 text-xl">{'★'.repeat(f.stars)}</div>
            <p className="text-gray-700 mt-2">{f.note}</p>
            <p className="text-sm text-gray-400 mt-1">{new Date(f.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFeedbacks;
