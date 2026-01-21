import React from 'react'
import { FaClinicMedical, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { MdAccessTime, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md' // Added MdEmail

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook className='text-lg'/>, label: "Facebook" },
        { icon: <FaX className='text-lg'/>, label: "x" },
        { icon: <FaInstagram className='text-lg'/>, label: "Instagram" }, // Fixed spelling
        { icon: <FaYoutube className='text-lg'/>, label: "Youtube" },
    ]
    
    const quickLinks = [ // Fixed spelling
        { text: "Home", href: "#" },
        { text: "About Us", href: "#about" },
        { text: "Our Services", href: "#services" },
        { text: "Our Specialists", href: "#specialists" }, // Fixed spelling
        { text: "Contact Us", href: "#contact" },
        { text: "Book Appointment", href: "#appointment" }, // Fixed spelling
    ]

    const contactInfo = [
        {
            icon: <MdLocationOn className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <a href='#' className='text-gray-400 hover:text-pink-500 transition'>
                No:160 <br/>
                Udhamulla <br/>
                Nugegoda
            </a> 
        },
        {
            icon: <MdPhone className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <a href="#" className='text-gray-400 hover:text-pink-500 transition'>
                +94761160694
            </a>
        },
        {
            icon: <MdEmail className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>, // Now imported
            content: <a href="mailto:info@gmail.com" className='text-gray-400 hover:text-pink-500 transition'>
                info@gmail.com
            </a>
        },
        {
            icon: <MdAccessTime className='text-pink-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <div className='text-gray-400 hover:text-pink-500 transition'>
                Mon-Fri: 9AM-10PM, Sat: 9AM-6PM
            </div>
        }
    ];

    const legalLinks = [
        { text: "Privacy Policy", href: '#' },
        { text: "Terms of Service", href: "#" }
    ]

    return (
        <footer className='bg-gray-900 text-white pt-16 pb-8'>
            <div className="container mx-auto px-4"> {/* Fixed: changed "di" to "div" */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                    <section className='lg:col-span-2'>
                        <header className='flex items-center mb-6'>
                            <FaClinicMedical className='text-3xl text-pink-500 mr-3' aria-hidden="true"/>
                            <h2 className='text-2xl font-bold'>Cosmetic</h2> {/* Fixed: changed "fontBold" to "font-bold" */}
                        </header>
                        <p className='text-gray-400 mb-6'>
                            At Cosmetic Clinic, we're dedicated to helping you look and feel your best with our expert aesthetic treatments. 
                            Our team of certified professionals combines medical expertise with artistic precision to deliver natural-looking 
                            results that enhance your unique beauty. From non-invasive procedures to advanced cosmetic solutions, we prioritize 
                            your safety, comfort, and satisfaction in every visit.
                        </p>
                        <nav className='Social media links'>
                            <ul className='flex space-x-4'>
                                {socialLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href="#" 
                                            className='bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition'
                                            aria-label={item.label}>
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                   
                    <section>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
                            Quick Links {/* Fixed spelling */}
                        </h3>
                        <nav aria-label="Quick links">
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => ( // Fixed variable name
                                    <li key={index}>
                                        <a href={link.href} className='text-gray-400 hover:text-pink-500 transition'>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                   
                    <address>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
                            Contact Us {/* Fixed spelling */}
                        </h3>
                        <ul className='space-y-4'>
                            {contactInfo.map((info, index) => ( // Fixed syntax: added comma
                                <li key={index} className='flex items-start'>
                                    {info.icon}
                                    {info.content}
                                </li>
                            ))}
                        </ul>
                    </address>
                </div>
                
                <section className='bg-gray-800 rounded-xl p-8 mb-12' aria-labelledby='newsletter-heading'>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <div className='mb-6 lg:mb-0 lg:mr-8'> {/* Fixed: changed "lg;mr-8" to "lg:mr-8" */}
                            <h3 id="newsletter-heading" className='text-xl font-bold mb-2'>Subscribe To Our Newsletter</h3>
                            <p className='text-gray-400'>Get updates on Special offers and Beauty tips</p>
                        </div>
                        <form action="" className='flex flex-col sm:flex-row w-full lg:w-auto' aria-label='Newsletter subscription form'>
                            <label htmlFor="newsletter-email" className='sr-only'>Your email address</label>
                            <input
                                id="newsletter-email"
                                type='email'
                                placeholder='Your email address'
                                className='px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3 sm:mb-0 sm:mr-4 w-full'
                                required
                            />
                            <button 
                                type='submit'
                                className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
                
                <footer className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'> {/* Fixed: changed "md;flex-row" to "md:flex-row" */}
                    <p className='text-gray-500 text-sm mb-4 md:mb-0'>
                        &copy; {new Date().getFullYear()} Cosmetic. All RIGHTS RESERVED.
                    </p>
                    <nav aria-label='Legal links'>
                        <ul className='flex space-x-6'>
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className='text-gray-500 hover:text-pink-500 text-sm transition'> {/* Fixed: changed link.text to link.href */}
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </footer>
            </div>
        </footer>
    );
};

export default Footer