import React from "react";
import Doctor from "../assets/Doctor.jpeg";
import Doctor2 from "../assets/Doctor2.jpeg";
import Doctor3 from "../assets/Doctor3.jpeg";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const Specialist = () => {
  const specialists = [
    {
      id: 1,
      name: "Dr. Chinthaka Kumara",
      role: "Plastic Surgeon",
      image: Doctor,
      bio: "An experienced plastic surgeon specializing in advanced aesthetic and reconstructive procedures, delivering natural-looking, patient-focused results.",
      rating: 5,
      specialists: ["Facelifts", "Rhinoplasty", "Blepharoplasty"],
    },
    {
      id: 2,
      name: "Dr. Amanda Silva",
      role: "Aesthetic Physician",
      image: Doctor2,
      bio: "Aesthetic medicine specialist focused on non-surgical facial rejuvenation and personalized cosmetic treatments.",
      rating: 5,
      specialists: ["Botox", "Dermal Fillers", "Skin Rejuvenation"],
    },
    {
      id: 3,
      name: "Dr. Michael Perera",
      role: "Dermatologist",
      image: Doctor3,
      bio: "Board-certified dermatologist specializing in advanced skin treatments and laser-based aesthetic procedures.",
      rating: 4.8,
      specialists: ["Laser Therapy", "Acne Treatment", "Skin Tightening"],
    },
  ];

  const renderStars = (rating) => {
    const rounded = Math.round(rating);
    return [...Array(5)].map((_, i) =>
      i < rounded ? (
        <FaStar key={i} className="text-yellow-400 inline" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400 inline" />
      )
    );
  };

  return (
    <section
      id="specialists"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity-30 z-0" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Meet Our <span className="text-pink-600">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Our team of highly qualified specialists brings years of experience
            in cosmetic and aesthetic medicine, delivering safe and
            confidence-enhancing results.
          </p>
        </header>

        {/* Specialists */}
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {specialists.map((doctor) => (
            <li key={doctor.id} className="group relative">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <figure className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                  <aside
                    className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm"
                    aria-label={`Rating ${doctor.rating}`}
                  >
                    {renderStars(doctor.rating)}
                    <span className="ml-1 text-sm font-medium">
                      {doctor.rating}
                    </span>
                  </aside>
                </figure>

                <div className="p-6 relative -mt-10">
                  <div className="bg-pink-50 rounded-lg shadow-md p-6 relative">
                    <header>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-pink-600 font-medium mb-3">
                        {doctor.role}
                      </p>
                    </header>

                    <p className="text-gray-600 mb-4">{doctor.bio}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialists.map((spec, i) => (
                        <li key={i}>
                          <span className="bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <figure
                      className="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg"
                      aria-hidden="true"
                    >
                      <FaQuoteLeft className="text-lg" />
                    </figure>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <aside
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <span className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-20" />
          <span className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-pink-200 opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Consult With Our Specialists?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a consultation today and take the first step toward
              confidence and transformation.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3 rounded-full transition shadow-lg"
              >
                Book a Consultation
              </a>
              <a
                href="#"
                className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-full transition shadow-lg"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Specialist;
