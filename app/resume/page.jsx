'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About Me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  info: [
    { fieldName: 'Name', fieldValue: 'Orel Alon' },
    { fieldName: 'Phone', fieldValue: '052-6707895' },
    { fieldName: 'Email', fieldValue: 'Orel.Alon.dev@gmail.vom' },
    { fieldName: 'Name', fieldValue: 'Orel Alon' },
  ],
};

// experience data
const experience = {
  icon: '/assets/rsume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum excepturi.',
  items: [
    {
      company: 'fill it',
      position: 'fill it',
      duration: 'fillit',
    },
    {
      company: 'fill it',
      position: 'fill it',
      duration: 'fillit',
    },
    {
      company: 'fill it',
      position: 'fill it',
      duration: 'fillit',
    },
    {
      company: 'fill it',
      position: 'fill it',
      duration: 'fillit',
    },
  ],
};

// education data
const education = {
  icon: '/assets/rsume/badge.svg',
  title: 'My Education',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum excepturi.',
  items: [
    {
      institution: 'fill it',
      degree: 'fill it',
      duration: 'fillit',
    },
    {
      institution: 'fill it',
      degree: 'fill it',
      duration: 'fillit',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, illum excepturi.',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'reactjs',
    },
    {
      icon: <FaNodeJs />,
      name: 'nodejs',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiNextdotjs />,
      name: 'nextjs',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind',
    },
  ],
};

const Resume = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      />
      <div className='container mx-auto'>
        <Tabs>
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About Me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      resume
    </div>
  );
};

export default Resume;
