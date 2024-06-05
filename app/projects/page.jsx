'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'sdxbn cehdcnsujcnasz cujhcn sujnxn jns',
    stack: [{ name: 'Html' }, { name: 'Css' }, { name: 'JavaScript' }],
    image: '/',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: 'sdxbn cehdcnsujcnasz cujhcn sujnxn jns',
    stack: [{ name: 'Html' }, { name: 'Css' }, { name: 'JavaScript' }],
    image: '/',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'sdxbn cehdcnsujcnasz cujhcn sujnxn jns',
    stack: [{ name: 'Html' }, { name: 'Css' }, { name: 'JavaScript' }],
    image: '/',
    live: '',
    github: '',
  },
];
const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[20px]'>
              <div className='text-8xl leading-none font-extrabold  text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              <p className='text-white/60'> {project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        {' '}
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />{' '}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        {' '}
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />{' '}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className='w-full xl:w-[50%]'>slider</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
