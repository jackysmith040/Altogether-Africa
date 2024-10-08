import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import BackgroundSlider from './components/BackgroundSlider';
import Icons from './components/Icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CarouselSlide from './components/CarouselSlide';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import TeamCard from './components/TeamCard'; 
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const App = () => {
  return (
    <main className='max-w-screen-7xl overflow-x-hidden bg-slate-100'>
      <Navbar />
      <section id='#home' data-aos="fade-down" data-aos-duration="1500" data-aos-linear="linear">
        <BackgroundSlider />
      </section>
      <section id='what-we-do' data-aos="zoom-in"  data-aos-duration="500">
        <div className='flex flex-col items-center mt-5 pt-5'>
          <h2 className='font-semibold text-3xl'>What We Do</h2>
          <p className='text-center pt-3 lg:w-1/2 font-light'>Our passion drives cross-sector projects that solve real-world problems through sustainable, cross-sector partnerships.</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="70" data-aos-duration="1500">
          <Icons />
        </div>
      </section>

      <section className="py-12 xl:px-24 px-4" id='about'>
        <div className="flex flex-col lg:flex-row mt-10 pt-10 mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Carousel Section */}
          <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-right" data-aos-duration="1500">
            <CarouselSlide />
          </div>

          {/* Accordion and Text Section */}
          <div className="lg:w-1/2 w-full space-y-4" data-aos="fade-left" data-aos-duration="1500">
            <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">About Us</h6>
            <p className='font-light text-gray-800 text-justify'>
            We serve as a bridge, working as a non-profit organization to facilitate ongoing success for Africa. We specifically address the challenges faced by African governments, businesses, and communities. Our approach involves identifying successful practices and technologies from other countries and facilitating their transfer to Africa. Our passionate commitment lies in supporting the UN's Sustainable Development Goal 8, which aims to promote inclusive and sustainable economic growth, employment, and decent work for all. We believe that it is our collective responsibility to take action on the persistent developmental issues in our continent.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md py-2 text-[#325d90] uppercase">
                  Our Vision
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray-700 text-justify font-open">
                Together, we want to see and live on a continent (Africa) with fewer challenges and more progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md py-2 text-[#325d90] uppercase ">
                  Our Mission
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray-700 text-justify font-open">
                Contribute to Africa's development through the transfer of best practices, skills, and technologies
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id='projects' data-aos="fade-up" data-aos-duration='1500'>
        <ServicesSection />
      </section>

      <section className='h-full xl:px-24 px-4' data-aos="zoom-in"  data-aos-duration="500">
        <div className='flex flex-col items-center mt-10 pt-10'>
          <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">Testimonials</h6>
          <h2 className='font-bold text-3xl text-center'>Hear What Our Clients Have To Say</h2>
        </div>
        <div >
          <Testimonials />
        </div>
      </section>

      <section className='h-full px-4' id='team'>
        <div className='flex flex-col items-center mt-10 pt-10'>
          <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">Our Team</h6>
          <h2 className='font-bold text-3xl text-center'>Meet Our Team</h2>
        </div>
        <div>
          <TeamCard />
        </div>
      </section>
      
      <section id='contact'>
        <div className='flex flex-col items-center mt-10 pt-10'>
          <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">Contact Us</h6>
        </div>
        <ContactInfo />
      </section>
      <Footer />
    </main>
  )
}

export default App;
