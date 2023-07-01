import Image from 'next/image';
import React from 'react';
import { footerLinks } from '../../constants';
import Link from 'next/link';

interface FooterColumnProp {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: FooterColumnProp) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="flex items-center justify-start flex-col w-full gap-20 bg-light-white px-8">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image width={115} height={43} src={'/logo.svg'} alt="flexibbble" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world&lsquo;s leading community for creatives to
            share, grow, and get hired!
          </p>
        </div>
        <div className="flex-wrap flex gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between max-sm:flex-col w-full text-sm font-normal">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects
          submitted
        </p>
      </div>
    </footer>
  );
}
