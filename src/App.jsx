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
// import Background from '/images/image6.jpg'
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';


const App = () => {
  return (
    <main className='max-w-screen-7xl overflow-x-hidden'>
      <Navbar />
      <section>
        <BackgroundSlider />
      </section>
      <section>
        <div className='flex flex-col items-center mt-5 pt-5'>
          <h2 className='font-semibold text-3xl'>All Together Africa</h2>
          <p className='text-center pt-3 lg:w-1/3 font-light'>We foster inclusive success for Africa through best practices,
          skills, and technologies.</p>
        </div>
        <div>
          <Icons />
        </div>
      </section>

      <section className="py-12 xl:px-24 px-4">
        <div className="flex flex-col lg:flex-row mt-10 pt-10 mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Carousel Section */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <CarouselSlide />
          </div>

          {/* Accordion and Text Section */}
          <div className="lg:w-1/2 w-full space-y-4">
            <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">About Us</h6>
            <p className='font-light text-gray-800 text-justify'>
            We are a pathway to success for Africa. As a non-profit, we unite efforts to tackle challenges faced by governments, businesses, and communities while implementing effective global solutions. Our mission supports the UN's Sustainable Development Goal 8 for inclusive economic growth and employment for all. We promote success through sharing best practices, skills, and technologies, addressing urgent developmental issues for a brighter future.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md py-2 text-[#325d90] uppercase">
                  Who We Are
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray-700 text-justify font-open">
                  We are a bridge to success for Africa. As a non-profit, we focus on mobilizing efforts that drive continuous progress across the continent. We identify challenges facing African governments, businesses, communities, and individuals. By discovering proven global solutions and best practices, we ensure their seamless transfer to address these issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md py-2 text-[#325d90] uppercase ">
                  Our Mission
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray-700 text-justify font-open">
                  Our mission aligns with UN Sustainable Development Goal 8, promoting inclusive and sustainable economic growth, employment, and decent work for all. Together, we share the responsibility to tackle Africa's most pressing developmental challenges.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section>
      <ServicesSection />
      </section>

      <section className='h-full xl:px-24 px-4'>
        <div className='flex flex-col items-center mt-10 pt-10'>
          <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">Testimonials</h6>
          <h2 className='font-bold text-3xl text-center'>Hear What Our Clients Have To Say</h2>
        </div>
        <div>
          <Testimonials />
        </div>
      </section>

      <section>
        <div className='flex flex-col items-center mt-10 pt-10'>
          <h6 className="text-[#325d90] uppercase text-md tracking-[3px] font-bold">Our Team</h6>
          {/* <h2 className='font-bold text-3xl text-center'>Hear What Our Clients Have To Say</h2> */}
        </div>
        <div>
          
        </div>
      </section>
    </main>
  )
}

export default App;
