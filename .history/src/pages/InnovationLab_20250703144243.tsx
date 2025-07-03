// import React from "react";
// import { ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import NavBar from "../components/NavBar";

// const InnovationLab: React.FC = () => {
//   return (
//     <main className="pt-20">
//       <NavBar />

//       {/* Hero Section with Carousel */}
//       <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary-800 mb-6">
//             Oxford Innovation Lab
//           </h1>
//           <p className="text-center text-sage-700 mb-8 max-w-2xl mx-auto">
//             Where creativity meets technology—fostering innovation, collaboration, and transformative learning.
//           </p>

//           {/* Swiper Carousel */}
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000 }}
//             loop
//             spaceBetween={20}
//             slidesPerView={1}
//             className="rounded-xl overflow-hidden shadow-lg"
//           >
//             {[
//                 "/files/laptop.jpg",
//                 "/files/robot.avif",
//                 "/files/team.jpg",
//                 "/files/draw.jpg"
//             ].map((src, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={src}
//                   alt={`Innovation Lab Slide ${idx + 1}`}
//                   className="w-full h-72 object-cover sm:h-"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
//           <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="text-xl font-semibold mb-2 text-primary-700">
//               Cutting-edge Technology
//             </h3>
//             <p className="text-sage-700">
//               Explore high-end 3D printers, VR kits, IoT tools, and rapid prototyping stations.
//             </p>
//           </div>
//           <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="text-xl font-semibold mb-2 text-primary-700">
//               Collaborative Workspaces
//             </h3>
//             <p className="text-sage-700">
//               Open lab benches, cozy brainstorming corners, and ideation walls encourage cross-functional teamwork.
//             </p>
//           </div>
//           <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="text-xl font-semibold mb-2 text-primary-700">
//               Real-world Projects
//             </h3>
//             <p className="text-sage-700">
//               Work on live industry-sponsored challenges and showcase projects in our demo space.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 bg-gradient-to-r from-primary-600 to-emerald-600 text-white text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//           Ready to Innovate with Us?
//         </h2>
//         <p className="mb-6 max-w-xl mx-auto">
//           Join our programs and start your journey toward becoming a technology leader of tomorrow.
//         </p>
//         <button className="btn-secondary inline-flex items-center gap-2">
//           Explore Programs
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </section>
//     </main>
//   );
// };

// export default InnovationLab;


import React from "react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import NavBar from "../components/NavBar";

const InnovationLab: React.FC = () => {
  return (
    <main className="pt-20">
      <NavBar />

      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary-800 mb-6">
            Oxford Innovation Lab
          </h1>
          <p className="text-center text-sage-700 mb-8 max-w-2xl mx-auto">
            Where creativity meets technology—fostering innovation, collaboration, and transformative learning.
          </p>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {[
              "/files/laptop.jpg",
              "/files/robot.avif",
              "/files/team.jpg",
              "/files/draw.jpg"
            ].map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Innovation Lab Slide ${idx + 1}`}
                  className="w-full h-72 object-cover sm:h-96"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary-700">
              Cutting-edge Technology
            </h3>
            <p className="text-sage-700">
              Explore high-end 3D printers, VR kits, IoT tools, and rapid prototyping stations.
            </p>
          </div>
          <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary-700">
              Collaborative Workspaces
            </h3>
            <p className="text-sage-700">
              Open lab benches, cozy brainstorming corners, and ideation walls encourage cross-functional teamwork.
            </p>
          </div>
          <div className="bg-sage-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-primary-700">
              Real-world Projects
            </h3>
            <p className="text-sage-700">
              Work on live industry-sponsored challenges and showcase projects in our demo space.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-800 mb-10">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ava Patel",
                story: "Developed an award-winning AI-driven health monitoring app that is now used in 30+ hospitals."
              },
              {
                name: "James Chen",
                story: "Led a team that built a smart agriculture IoT system showcased at CES."
              },
              {
                name: "Lina Gomez",
                story: "Created an immersive VR education platform that raised $500k in seed funding."
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <p className="text-sage-700 italic">"{s.story}"</p>
                <p className="mt-4 font-semibold text-primary-700">— {s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-800 mb-10">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sage-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hackathon 2025</h3>
              <p className="text-sage-700 mb-2">Join our 48-hour innovation sprint to build impactful solutions with peers and mentors.</p>
              <p className="text-sage-700 text-sm">Date: October 10-12, 2025</p>
            </div>
            <div className="bg-sage-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Design Thinking Workshop</h3>
              <p className="text-sage-700 mb-2">Learn how to ideate, prototype, and pitch your ideas effectively.</p>
              <p className="text-sage-700 text-sm">Date: November 5, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary-700">Who can access the lab?</h4>
              <p className="text-sage-700">All Oxford students and faculty can register for lab access.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-700">Is prior experience required?</h4>
              <p className="text-sage-700">No—training and orientation are provided for all equipment and tools.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-700">How do I join a project team?</h4>
              <p className="text-sage-700">You can apply to open projects through our online portal or attend our monthly mixers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-emerald-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Innovate with Us?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Join our programs and start your journey toward becoming a technology leader of tomorrow.
        </p>
        <button className="btn-secondary inline-flex items-center gap-2">
          Explore Programs
          <ChevronRight className="w-4 h-4" />
        </button>
      </section>
    </main>
  );
};

export default InnovationLab;

