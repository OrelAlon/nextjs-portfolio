'use client';

import { motion } from 'framer-motion';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

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
          {' '}
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            text
          </div>
          <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
            {project.num}
          </div>
          <h2>{project.category}</h2>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
