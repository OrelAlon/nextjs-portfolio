import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaPhone, FaMailBulk } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/OrelAlon' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/orel-alon/' },
  // { icon: <FaPhone />, path: 'tel:0526707895' },
  // { icon: <FaMailBulk />, path: 'mailto:orel.alon.dev@gmail.com' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target='_blank'
            rel='noopener noreferrer'
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
