import NavBar from "../components/NavBar";
import React from "react";
import { ChevronRight } from "lucide-react";

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      location: "Bangalore, India",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Contract",
    },
    {
      title: "Product Manager",
      location: "Hyderabad, India",
      type: "Full-time",
    },
  ];

  return (
    <>
    <NavBar/>
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-sage-700 max-w-2xl mx-auto">
            We are building a culture of innovation, collaboration, and growth.
            Explore our open positions and help us shape the future.
          </p>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          {positions.map((job, index) => (
            <div
              key={index}
              className="border border-sage-200 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-2">
                {job.title}
              </h3>
              <p className="text-sage-700 mb-1">{job.location}</p>
              <p className="text-sage-600 mb-4">{job.type}</p>
              <button className="btn-secondary inline-flex items-center gap-2">
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-emerald-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          We’re always looking for talented people. Send us your resume, and we’ll get in touch.
        </p>
        <button className="btn-secondary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center gap-2">
          Submit Resume
          <ChevronRight className="w-4 h-4" />
        </button>
      </section>
    </main>
    </>
    
  );
};

export default CareersPage;
