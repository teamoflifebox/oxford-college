import React from "react";
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
      src: "https://images.unsplash.com/photo-1606326608691-0084fdc1f5af?auto=format&fit=crop&w=800&q=80",
      alt: "Sports Grounds",
    },
  ];

  return (
    <>
    <NavBar/>
    <br/><br/>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-10">
          Campus Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CampusGallery;
