import React from "react";
import { BsTwitter, BsBookmark } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiBellThin } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { VscVerified } from "react-icons/vsc";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const inter = Inter({ subsets: [] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle className=" text-[30px]" />,
  },
  {
    title: "Explore",
    icon: <FiSearch />,
  },
  {
    title: "Notifications",
    icon: <PiBellThin />,
  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Verfied",
    icon: <VscVerified />,
  },
  {
    title: "Profile",
    icon: <AiOutlineUser />,
  },
  {
    title: "More",
    icon: <HiOutlineDotsCircleHorizontal />,
  },
];

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <div className=" grid grid-cols-12 h-screen w-screen px-56">
        {/*  */}
        {/* Left side twitter navigation area */}
        <div className="col-span-3 sticky top-0">
          <div className="text-4xl h-fit w-fit hover:bg-gray-600 hover:bg-opacity-40 rounded-full p-3 cursor-default transition-all">
            <BsTwitter />
          </div>
          <div>
            <ul>
              {sidebarMenuItems.map((items) => {
                return (
                  <li
                    key={items.title}
                    className="text-xl hover:font-bold flex justify-start items-center gap-3  hover:bg-gray-600 duration-300 hover:bg-opacity-40 transition-all rounded-full  w-fit px-5 py-3 mt-3 cursor-default"
                  >
                    <span className="text-2xl text-white">{items.icon}</span>
                    <span>{items.title}</span>
                  </li>
                );
              })}
            </ul>
            <button className="bg-[#1C9BEF] hover:bg-[#0271bb] p-3  rounded-full w-[233px] h-[52px]  mt-5 text-[17px] font-bold cursor-default transition-all duration-500">
              Post
            </button>
          </div>
        </div>

        {/* Middle Twitter feeds area */}
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-[#2d2b2b] h-screen overflow-scroll ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Right side  search-bar  and suggestion  area  */}
        <div className="col-span-3"> </div>
      </div>
    </div>
  );
}
