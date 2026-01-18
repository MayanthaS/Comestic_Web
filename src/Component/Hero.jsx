import React from 'react'
import hero from "../assets/hero.jpg"

const Hero = () => {
    const stats =[
        {value:"2500+",label:"Happy Customers"},
        {value:"150+",label:"Expert Specialists"},
        {value:"50+",label:"Treatments"},
        {value:"10+",label:"Years of Experinece"}
    ];
  return (
    <section id='home ' className='relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100 '>
        <article className='container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row item'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
             <hgroup data-aos ="fade-up" data-aos-delay='600'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4'>
                    Enhance Your Natural <mark className='text-pink-600 bg-transparent'>Beauty</mark> 
                </h1>
                <p className='text-lg text-gray-600 mb-8 max-w-lg'>Experience the perfect blend of luxury and wellness with our premium cosmetic treatments.</p>
             </hgroup>
             <nav data-aos ="fade-up" data-aos-delay='500'className='flex flex-col sm:flex-row gap-4 mb-12'>
                <a href="#appointment"
                className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full  text-center transition shadow-lg '
                aria-label="Book a Consultation">
                    Book a Consultation
                </a>
                <a href="#services"
                className='border border-pink-600 text-white bg-pink-600 hover:bg-pink-50  hover:text-pink-600 px-8 py-3 rounded-full text-center transition'
                aria-label="Explore Our Services">
                    Explore Our Services
                </a>
             </nav>
             <aside data-aos ="fade-up" data-aos-delay='800' className='py-4'>
                <ul className='flex flex-wrap justify-center gap-4 md:gap-8 text-center '>
                    {stats.map ((stat,index) =>(
                        <li key={index} className='bg-white rounded-lg shadow-md p-4'>
                            <span className='text-2xl font-bold text-pink-600'>{stat.value}</span>
                            <p className=' block text-sm text-gray-600'>{stat.label}</p>
                        </li>
                    ))}
                </ul>

             </aside>
            </div>
            <figure data-aos ="fade-up" data-aos-delay='700' className='md:w-1/2 flex items-center justify-center'>
                <div className='relative w-full max-w-md ' >
                    <span className='bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20'
                    aria-hidden="true">
                    </span>
                    <span className='bg-purple-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20'
                    aria-hidden="true">
                    </span>
                    <img 
                    src={hero}
                    alt="cosmetic treatment "
                    className='relative rounded-full shadow-2xl w-full max-w-md md:w-sm object-cover '
                    width={400}
                    height={400}
                    loading='eagar'
                    />
                </div>
            </figure>
        </article>
    </section>
  )
}

export default Hero

