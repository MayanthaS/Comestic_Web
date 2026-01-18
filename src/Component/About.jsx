import React from "react";
import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from "react-icons/fa";
import about from "../assets/About.jpg";

const About = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <FaAward className="text-pink-500 " aria-hidden="true" />,
    },
    {
      value: "2.5+",
      label: "Happy Client",
      icon: <FaHeart className="text-pink-500 " aria-hidden="true" />,
    },
    {
      value: "1.5+",
      label: "Expert Doctors",
      icon: <FaUserMd className="text-pink-500 " aria-hidden="true" />,
    },
    {
      value: "10+",
      label: "Treatment",
      icon: <FaClinicMedical className="text-pink-500 " aria-hidden="true" />,
    },
  ];
  const approachTtems = [
    {
      icon: <FaHeart className="text-pink-600" aria-hidden="true" />,
      text: "Personalized care",
    },
    {
      icon: <FaHeart className="text-pink-600" aria-hidden="true" />,
      text: "Personalized care",
    },
    {
      icon: <FaUserMd className="text-pink-600" aria-hidden="true" />,
      text: "State-of-the-art clinic",
    },
    {
      icon: <FaClinicMedical className="text-pink-600" aria-hidden="true" />,
      text: "Safe, modern facility",
    },
  ];
  return (
    <section
      id="about"
      className="py-14 overflow-hidden bg-gradient-to-br from-pink-100  to-purple-100"
    >
      <div className="container mx-auto px-4">
        <article
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <figure className="lg:w-5/12 relative ">
            <div className="realtive z-10 rounded-2xl overflow-hidden shadow-2xl w-full  max-w-md mx-auto">
              <img
                src={about}
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent  "
                aria-hidden="true"
              ></div>
            </div>
            <span
              className="hidden lg:block absolute -bottom-8 -left-8 w-32  h-32 rounded-full *:bg-pink-500 opacity-20 z-0"
              aria-hidden="true"
            ></span>
            <span
              className="hidden lg:block absolute -top-8 -right-8 w-40  h-40 rounded-full *:bg-pink-600 opacity-20 z-0"
              aria-hidden="true"
            ></span>
            <aside className="absolute bottom-1 -right-5 bg-white p-3 shadow-lg z-20 ">
              <strong className="text-2xl font-bold text-pink-600">10+</strong>
              <small className="block text-xs font-medium text-gray-600">
                Years Experience
              </small>
            </aside>
          </figure>
          <div data-aos="fade-up" data-aos-delay="600" className="lg:w-7/12">
            <header>
              <h2 className="text 2xl md:text-4xl font-bold text-gray-800 mb-6">
                About <span className=" text-pink-600">Cosmetic</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Cosmetic, we are dedicated to enhancing your natural beauty
                through personalized, results-driven treatments. With over a
                decade of experience, our expert medical team combines advanced
                aesthetic techniques with compassionate care to deliver safe,
                refined, and natural-looking results tailored to your unique
                goals.
              </p>
            </header>
            <section className="m-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 ">
                Our Approach
              </h3>
              <ul className="space-y-3">
                {approachTtems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <figure className="bg-pink-100 p-1 rounded-full mr-3">
                      {item.icon}
                    </figure>
                    <p className="text-gray-700">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <article
                  key={index}
                  className="bg-white p-4 shadow-sm flex items-center gap-3 rounded-lg"
                >
                  <figure>{item.icon}</figure>
                  <div>
                    <strong className="text-lg font-bold text-gray-800">
                      {item.value}
                    </strong>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </article>
              ))}
            </section>
            <nav>
              <a
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700  text-white px-6 py-3 rounded-full transition shadow:md focus:outline-none  focus:ring-2 focus:ring-pink-800  focus:ring-offset-2"
              >
                Meet Our Specialists
              </a>
            </nav>
          </div>
        </article>
        <aside className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40"
            aria-hidden="true"
          ></span>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <blockquote className="text-lg text-gray-700 mb-6">
                “Every treatment is thoughtfully designed to reflect your unique
                beauty, ensuring safe, natural, and confidence-boosting
                results.”
              </blockquote>
              <figure className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center mr-4">
                  <FaUserMd className="text-pink-600" aria-hidden="true" />
                </div>
                <figcaption>
                  <cite className="font-semibold text-gray-800 not-italic">
                    Dr. Chinthaka Kumara
                  </cite>
                  <p>Medical Director & Founder</p>
                </figcaption>
              </figure>
            </h3>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
