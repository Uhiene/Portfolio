import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/princess-uhiene-399470198/',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Chenemi_U',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@codeDuchess',
  },
];

const SocialLinks = () => {
  return (
    <ul className="absolute z-10 list-none flex gap-6 text-[10px] font-normal uppercase  transform lg:-rotate-90 bottom-10 lg:bottom-auto lg:top-1/2 lg:-right-12">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="text-ash hover:text-white tracking-[4px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
