'use client';

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* <span className='text-xl'>Web Developer</span> */}
            <h1 className='h1 mb-6'>
              {' '}
              Hello I'm <br />
              <span className='text-accent'>Orel Alon</span>
            </h1>

            <TypeAnimation
              className='text-xl'
              sequence={[
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'Project Manager',
                1000,
              ]}
              wrapper='span'
              speed={25}
              repeat={Infinity}
            />
            <p className='max-w-[500px] mb-9 text-white/80'>
              I need to add something here
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/17wGx6-20Xu02v4S87wu4nHbAHufuNVzd/view?usp=sharing'
                download
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='flex items-center gap-2'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border rounded-full border-accent flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* photo */}

      {/* test */}
      <div></div>
    </section>
  );
};

export default Home;
