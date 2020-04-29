import React from "react";
import { YouTube } from "../icons/YouTube";
import HamBurger from "../icons/HamBurger";
import Search from "../icons/Search";
import Create from "../icons/Create";
import MenuIcon from "../icons/MenuIcon";
import NotificationIcon from "../icons/NotificationIcon";

const NavBar = () => {
  return (
    <div className="bg-yt-nav h-16 block shadow-none">
      <span className="text-2xl text-white bold">
        <div class="grid grid-cols-5 gap-2">
          <div class="col-span-1 bg-yt-nav h-screen">
            <div className="text-white p-4">
              <div className="flex flex-row">
                <span className="mr-8 px-6">
                  <HamBurger />
                </span>
                <span>
                  <YouTube />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-4 text-center">
            <div className="flex flex-row justify-center">
              <input
                class="placeholder-gray-500 w-3/5 bg-yt-insideBox text-yt-textBox text-base h-8 px-2 inline-block"
                placeholder="Search"
              />
              <button className="bg-yt-searchButton h-8 w-16 text-center px-2 text-base flex justify-center">
                <Search />
              </button>
            </div>
          </div>
          <div className="col-span-1 p-4 flex flex-end justify-end">
            <div className="flex flex-row">
              <Create />
              <MenuIcon />
              <NotificationIcon />
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiZ8uDLrYJ6qZ51x_LUT2j5LFmhYL-LP6Yn-1WTdao=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="profile_image"
                className="h-8 w-8 rounded-full m-1"
              />
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default NavBar;
