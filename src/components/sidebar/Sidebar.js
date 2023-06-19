import { useState } from "react";
import Logo from "../common/icons/Logo";
import Backarrow from "../common/icons/Backarrow";
import Home from "../common/icons/Home";
import Message from "../common/icons/Message";
import Tasks from "../common/icons/Tasks";
import Member from "../common/icons/Member";
import Settings from "../common/icons/Settings";
import Bulb from "../common/icons/Bulb";
import Overlay from "../common/icons/Overlay";

const menuItems = [
  {
    id: 1,
    icon: <Home />,
    name: "Home",
  },
  {
    id: 2,
    icon: <Message />,
    name: "Messages",
  },
  {
    id: 3,
    icon: <Tasks />,
    name: "Tasks",
  },
  {
    id: 4,
    icon: <Member />,
    name: "Members",
  },
  {
    id: 5,
    icon: <Settings />,
    name: "Settings",
  },
];

const projectsItem = [
  {
    id: 1,
    color: "#7AC555",
    title: "Mobile App",
  },
  {
    id: 2,
    color: "#FFA500",
    title: "Website Redesign",
  },
  {
    id: 3,
    color: "#E4CCFD",
    title: "Design System",
  },
  {
    id: 4,
    color: "#76A5EA",
    title: "Wireframes",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-white border border-gray-200 duration-300 h-screen sticky top-0 ${
        open ? "w-80" : "w-20"
      } relative`}
    >
      <div className="flex justify-between items-center p-[1.6rem] border-b">
        <div className="flex items-center">
          <Logo />
          <h1
            className={`text-xl font-medium ml-2 duration-300 ${
              !open && "scale-0"
            }`}
          >
            ProjectM
          </h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`cursor-pointer -ml-[5.7rem] ${!open && "rotate-180"}`}
        >
          <Backarrow />
        </div>
      </div>

      <div className="px-6 py-2 border-b">
        {menuItems.map((item) => (
          <div key={item.id} className="flex items-center my-6">
            <div>{item.icon}</div>
            <div className={`duration-300 ${!open && "scale-0"}`}>
              <h1 className="text-base ml-6 text-[#787486]">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-2">
        {projectsItem.map((item) => (
          <div key={item.id} className="flex items-center my-6">
            <div>
              <span
                style={{ backgroundColor: `${item.color}` }}
                className={`${
                  open ? "h-2 w-2 " : "h-6 w-6 "
                }rounded-full inline-block`}
              ></span>
            </div>
            <div className={`duration-300 ${!open && "scale-0"}`}>
              <h1 className="text-base ml-6 text-[#787486] whitespace-nowrap">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-8 px-6 py-2 ${!open && "scale-0"}`}>
        <div className="bg-neutral-100 p-6 flex flex-col items-center  rounded-xl">
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-neutral-100 -mt-12">
            <div className="absolute z-20 top-5 left-5">
              <Bulb />
            </div>
            <div className="absolute z-10 w-full -top-6 -left-5">
              <Overlay />
            </div>
          </div>

          <h4 className="text-base text-center my-4">Thoughts Time</h4>
          <p className="text-sm text-center text-[#767486]">
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="bg-white rounded-lg mt-4 px-4 py-2 text-sm">
            Write a message
          </div>
        </div>
      </div>
      <div className={`${!open ? "block" : "hidden"}`}>
        <div className="relative ml-2 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-100 -mt-96">
          <div className="absolute z-20 top-5 left-5">
            <Bulb />
          </div>
          <div className="absolute z-10 w-full -top-6 -left-5">
            <Overlay />
          </div>
        </div>
      </div>
    </div>
  );
}
