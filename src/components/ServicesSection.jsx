import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import Background from '/images/image6.jpg';

const ServicesSection = () => {

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#services-section');
      const position = section.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        setInView(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='min-h-screen  relative px-4 xl:px-22' id='services-section'
    style={{
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
    <div className="absolute inset-0 bg-white opacity-90"></div>

      <div className='relative z-10 flex flex-col items-center pt-12 text-center text-black'>
      <h6 className='text-md tracking-[3px] uppercase text-primary font-bold mb-5'>Our Projects</h6>
        <p className='text-normal lg:w-2/3 mb-10 font-light'>Solving real problems takes real commitment and vision. We employ passion, synergy, and intelligence to take on sustainable projects, from implementation to reinforcement. From agriculture and education to technology and health, we are always working to better our world.</p>
      </div>
      <div className='z-20 relative grid grid-cols-1 gap-8 px-12 mb-10'>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='bg-primary flex items-center lg:mx-24 justify-center w-[200px] h-[150px] text-white rounded-lg'>
              <h3 className='text-4xl font-bold mb-4'>1</h3>
            </div>
            <div className='text-center w-96 px-4'>
              <h4 className='text-xl font-semibold mb-1'>Project Implementation</h4>
              <p className='font-light text-gray-700'>We lead and support sustainable projects across various sectors such as agriculture, education, technology, and health. From inception to execution, we work with passion and intelligence to bring lasting solutions to real-world problems.</p>
            </div>
          </div>

          {/* Development and Knowledge Sharing */}
          <div className='flex flex-col items-center lg:items-start'>
            <div className='bg-primary flex items-center justify-center lg:mx-24 w-[200px] h-[150px] text-white rounded-lg'>
              <h3 className='text-4xl font-bold mb-4'>2</h3>
            </div>
            <div className='text-center w-96 px-4'>
              <h4 className='text-xl font-semibold mb-1'>Development & Training</h4>
              <p className='font-light text-gray-700'>We are committed to empowering people by offering skill development programs, focusing on enhancing their expertise in various fields. Our goal is to improve livelihoods through tailored training initiatives that foster growth.</p>
            </div>
          </div>
      </div>

      <div className='lg:-mt-[450px] z-20 relative mb-10'>
        <div className='flex flex-col items-center justify-center text-black '>
            <div>
              <h3 className='text-4xl font-bold mx-10'>
                {inView && <CountUp start={0} end={10} duration={3} />}+
              </h3>
              <p className='text-lg font-light mt-2'>Completed Projects</p>
            </div>
            <div className='mt-8'>
              <h3 className='text-4xl font-bold mx-10'>
                {inView && <CountUp start={0} end={8} duration={3} />}+ 
              </h3>
              <p className='text-lg font-light mt-2'>Pending Projects</p>
            </div>
            <div className='mt-8'>
              <h3 className='text-4xl font-bold mx-10'>
                {inView && <CountUp start={0} end={12} duration={3} />}+
              </h3>
              <p className='text-lg font-light mt-2'>Ongoing Projects</p>
            </div>
        </div>
      </div>

      <div className='z-20 relative grid grid-cols-1 gap-8 px-12 lg:-mt-[500px]'>
          <div className='flex flex-col items-center lg:items-end'>
            <div className='bg-primary flex items-center lg:mx-24 justify-center w-[200px] h-[150px] text-white rounded-lg'>
              <h3 className='text-4xl font-bold mb-4'>3</h3>
            </div>
            <div className='text-center w-96 px-4'>
              <h4 className='text-xl font-semibold mb-1'>Development & Knowledge Sharing</h4>
              <p className='font-light text-gray-700'>We strengthen communities by promoting knowledge sharing, replicating successful initiatives, and transferring technology. By connecting high-performing communities with those that are underdeveloped, we ensure progress is inclusive and widespread.</p>
            </div>
          </div>

          {/* Support & Tech Solutions */}
          <div className='flex flex-col items-center lg:items-end'>
            <div className='bg-primary flex items-center justify-center lg:mx-24 w-[200px] h-[150px] text-white rounded-lg'>
              <h3 className='text-4xl font-bold mb-4'>4</h3>
            </div>
            <div className='text-center w-96 px-4'>
              <h4 className='text-xl font-semibold mb-1'>Support & Tech Solution</h4>
              <p className='font-light text-gray-700'>We help small businesses overcome challenges by introducing best practices and advanced technologies. Through our support, businesses can scale efficiently, driving economic prosperity and long-term success.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ServicesSection