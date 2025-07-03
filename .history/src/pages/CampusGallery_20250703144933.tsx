// import React from "react";
// import NavBar from "../components/NavBar";
// const CampusGallery: React.FC = () => {
//   const images = [
//     {
//       src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
//       alt: "Library",
//     },
//     {
//       src: "/files/campus_walkaway.jpg",
//       alt: "Campus Walkway",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
//       alt: "Lecture Hall",
//     },
//     {
//       src: "/files/student-center.jpg",
//       alt: "Student Center",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=80",
//       alt: "Computer Lab",
//     },
//     {
//       src: "/files/sports_ground.jpg",
//       alt: "Sports Grounds",
//     },
//   ];

//   return (
//     <>
//     <NavBar/>
//     <br/><br/>
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-primary-800 mb-10">
//           Campus Gallery
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default CampusGallery;


import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const CampusGallery: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
      alt: "Library",
    },
    {
      src: "/files/campus_walkaway.jpg",
      alt: "Campus Walkway",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      alt: "Lecture Hall",
    },
    {
      src: "/files/student-center.jpg",
      alt: "Student Center",
    },
    {
      src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=80",
      alt: "Computer Lab",
    },
    {
      src: "/files/sports_ground.jpg",
      alt: "Sports Grounds",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Banner */}
      <section className="relative h-96 bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1600&q=80"
          alt="Campus Overview"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center px-4">
            Welcome to Our Beautiful Campus
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-6">
            Campus Gallery
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore our vibrant campus spaces that foster learning, collaboration, and well-being.
            From modern lecture halls to serene walkways, every corner has a story.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4 text-primary-700">
              Ready to Experience Campus in Person?
            </h3>
            <p className="mb-6 text-gray-600 max-w-xl mx-auto">
              Schedule a guided tour to explore our facilities and discover what makes our community unique.
            </p>
            <a
              href="/schedule-tour"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition"
            >
              Schedule a Campus Tour
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusGallery;

