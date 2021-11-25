import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="border-t h-full bg-white ">
      <div className="w-full mx-auto max-w-6xl lg:px-4 lg:pt-6 h-full">
        <div className="flex lg:flex-row flex-col justify-between items-center h-full">
          <div className="lg:border-r w-full h-full lg:block flex items-center justify-center flex-col border-b lg:border-b-0  px-4 py-6 lg:p-0">
            <h1 className="text-2xl text-primary-footer pb-4">
              Customer Service
            </h1>
            <ul className="text-base text-primary-footerLink">
              <li className="pb-2">
                <Link href="/">
                  <a className="hover:underline">Contact Us</a>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/">
                  <a className="hover:underline">Shipping</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:border-r w-full h-full lg:block flex items-center justify-center flex-col border-b lg:border-b-0 px-4 py-6 ">
            <h1 className="text-2xl text-primary-footer pb-4">Products</h1>
            <ul className="text-base text-primary-footerLink">
              <li className="pb-2">
                <Link href="/">
                  <a className="hover:underline ">Bag</a>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/">
                  <a className="hover:underline">Bag</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:ml-4 w-full h-full px-4 py-6 lg:p-0 flex items-center justify-center flex-col lg:block">
            <h1 className="text-2xl text-primary-footer pb-4">Newsletter</h1>
            <span className="text-primary-footerLink">
              Sign Up for Our Newsletter
            </span>
            <div className="mt-2 h-10 flex w-full">
              <input
                type="text"
                className="focus:outline-none border py-1 px-3 h-full w-full"
              />
              <button className="py-1 px-3 lg:border-r border-t  border-b h-full transition-all hover:bg-blue-500 hover:text-white w-1/2">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          © 2021 House Giyim
        </div>
      </div>
    </footer>
  );
};

export default Footer;
