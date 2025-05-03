"use client";
import { SocialBox } from "./SocialBox";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 md:pt-20 lg:pt-24 dark:bg-gray-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <SocialBox />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
