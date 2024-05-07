import React from 'react';
import Image from 'next/image';
import place from '../public/img/aboutakipizza.png';

function About() {


    const bgwrapper = 'wrapper-background';
    return (
        <section className={`w-full xl:h-screen 2xl:h-screen flex items-center mt-2 ${bgwrapper}`} id='about'>
            {/* Use inline style for background image */}
            <div className='w-full md:grid grid-cols-2 gap-5' >
                <div className='justify-self-center text-center mt-5 pt-5 text-black'>
                    <p className='text-3xl mb-5 mt-2 md:text-6xl xl:text-7xl 2xl:text-8xl md:mt-16'>About Us</p>
                    <p className='text-sm md:text-xl xl:text-2xl 2xl:text-2xl ml-10 mr-10 md:mt-10'>At Taki Pizza, we're passionate about creating delicious, high-quality pizzas that bring people together. Our team of skilled chefs and friendly staff are dedicated to providing our customers with a memorable dining experience. We use only the freshest ingredients and authentic recipes to ensure that every bite of our pizza is bursting with flavor. Come visit us today and discover why we're the go-to destination for pizza lovers.</p>
                    <p className='text-2xl xl:text-3xl 2xl:text-4xl mt-3 md:py-14 md:mt-10'>Check out our delicious menu!</p>
                </div>
                <div className='w-full items-center justify-center grid md:mt-10 pt-10'>
                    <Image src={place} width={500} height={400} alt='place' className='mb-10' />
                </div>
            </div>
        </section>
    );
}

export default About;
