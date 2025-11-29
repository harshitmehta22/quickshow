import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
          <div className="md:max-w-96">
            <img className="w-36 h-auto" src={assets.logo} alt="logo" />
            <p className="mt-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={assets.googlePlay}
                alt="google-paly"
                className="h-10 w-auto border border-white rounded"
              />
              <img
                src={assets.appStore}
                alt="appstore"
                className="h-10 w-auto border border-white rounded"
              />
            </div>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
            <div>
              <h2 className="font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Theaters</a>
                </li>
                <li>
                  <a href="#">Releases</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5">Get in Touch</h2>
              <div className="text-sm space-y-2">
                <p>+91-9340789782</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-sm pb-5">
          Copyright {new Date().getFullYear()} © QuickShow. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
