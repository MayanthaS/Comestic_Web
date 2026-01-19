import React from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
import ContactImg from "../assets/Contact.png"
import Image5 from "../assets/images 5.jpg"

const Contact = () => {
  const constactItems = [
    {
      icon: <FaMapMarkerAlt className="text-pink-600 text-xl " />,
      title: "Our Location",
      content: (
        <p className="text-gray-600">
          No:160 Udahamulla <br></br>
          Nugegoda
        </p>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-pink-600 text-xl " />,
      title: "Phone Numbers",
      content: (
        <p className="text-gray-600">
          Contact:
          <a href="#" className="hover:text-pink-600">
            +94 761160654
          </a>
          <br />
          Emergency:
          <a href="#" className="hover:text-pink-600">
            +94 631160654
          </a>
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-pink-600 text-xl " />,
      title: "Email",
      content: (
        <p className="text-gray-600">
          <a href="#" className="hover:text-pink-600">
            Cosmetic@gmail.com
          </a>
          <br />
          <a href="#" className="hover:text-pink-600">
            info@gmail.com
          </a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-pink-600 text-xl " />,
      title: "Working Hours",
      content: (
        <p className="text-gray-600">
          Sunday - Friday:9.00 AM -9.00 PM
          <br />
          Saturday : 9.00 AM -10.00 PM <br />
          All PoyaDays Closed
        </p>
      ),
    },
  ];
  const services = [
    { value: "botox", label: "Botox Treatments" },
    { value: "filters", label: "Dermal Fillers" },
    { value: "laser", label: "Laser Theraphy" },
    { value: "facelift", label: "Mon-Surgical Facelift" },
    { value: "other ", label: "Other" },
  ];
  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100 "
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -tranlate-x-1/2 w-24 h-24 rounded-full bg-pink-100 opacity-30 z-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
              Contact <span className="text-pink-600">Our Clinic</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
              We’re here to support your journey to better health. Contact our
              clinic to schedule an appointment, ask about our services, or
              speak directly with our care specialists.
            </p>
          </div>
        </header>
        <main className="flex flex-col lg:flex-row gap-12">
            <aside data-aos="fade-up" data-aos-delay="500"  className="lg:w-2/5">
             <section className="bg-white rounded-2xl shadow-xl  p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 ">Get In Touch</h2>
                <address className="space y-6">
                    {
                        constactItems.map((item,index)=>(
                            <article key={index} className="flex items-start">
                                <figure className="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                                    {item.icon}
                                </figure>
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-1 ">{item.title}</h3>
                                    {item.content}
                                </div>
                            </article>
                        ))
                    }
                </address>
                <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                    <img 
                    src={ContactImg}
                    alt="" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    width="400"
                    height="200"
                    loading="lazy"/>
                </figure>
             </section>
            </aside>
            <section data-aos ="fade-up" data-aos-delay="600" className="lg:w-3/5">
                    <div className="bg-white rounded-2xl shadow-xl p-8 h-full ">
                        <h2 className="text-2xl  font-bold text-gray-800 mb-6">Sen Us A Message</h2>
                        <form action="" className="space-y-6">
                            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor=""className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border border-gray-300nrounded-lg focus:ring-2
                                    focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Your Name Type Here" 
                                    required/>
                                </div>
                                <div>
                                    <label htmlFor=""className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input 
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-gray-300nrounded-lg focus:ring-2
                                    focus:ring-pink-500 focus:border-transparent"
                                    placeholder="+94 xx xxx xxxx" 
                                    required/>
                                </div>
                            </fieldset>
                              <div>
                                    <label htmlFor=""className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-300nrounded-lg focus:ring-2
                                    focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Your@gmail.com" 
                                    required/>
                                </div>
                                <div>
                                    <label htmlFor=""className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                                    <select 
                                    type="service"
                                    id="service"
                                    name="service"
                                    className="w-full px-4 py-3 border border-gray-300nrounded-lg focus:ring-2
                                    focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Your@gmail.com" 
                                    required>
                                    <option value="">Select Service</option>
                                    {services.map((services)=>{
                                        <option key={services.value} value={services.value}>
                                            {services.label}
                                        </option>
                                    })}
                                    </select>  
                                </div>
                                <div>
                                    <label htmlFor=""className="block text-gray-700 font-medium mb-2">Your Message</label>
                                    <input 
                                    type="message"
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 border border-gray-300nrounded-lg focus:ring-2
                                    focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Tell Us About Our Product" 
                                    required/>
                                </div>
                                <div>
                                    <button type="submit"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full 
                                    transisition shadow-lg w-full md:w-auto"
                                    aria-label="Submit contact form">
                                        Send a Message
                                    </button>
                                </div>

                        </form>
                    </div>
            </section>
        </main>
        <figure data-aos='fade-up' data-aos-delay="600" className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden ">
            <iframe src={Image5} frameborder="0"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            title="Cosmtic Item Aria"
            className="rounded-2xl"
            aria-label="CosmeticLoaction"></iframe>
        </figure>
      </div>
    </article>
  );
};

export default Contact;
