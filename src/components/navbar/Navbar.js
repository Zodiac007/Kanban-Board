import Search from "../common/icons/Search";
import Calender from "../common/icons/Calender";
import Message1 from "../common/icons/Message1";
import Bell from "../common/icons/Bell";
import DropDown from "../common/icons/DropDown";

export default function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center border-b w-auto border-gray-200 py-5 px-28">
        <div className="flex items-center p-2 w-1/5 bg-gray-100 rounded-lg">
          <div className="mx-2">
            <Search />
          </div>
          <input
            type="search"
            placeholder="Search for anything..."
            className="text-base bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <div className="flex gap-6">
            <Calender />
            <Message1 />
            <Bell />
          </div>
          <div className="flex items-center ml-20">
            <div className="mr-4 text-right">
              <h3 className="text-sm text-slate-950">Harsh Dwivedi</h3>
              <p className="text-sm text-[#787486]">U.P, India</p>
            </div>
            <div className="h-9 w-9">
              <img
                className="rounded-full w-full h-full aspect-square bg-contain bg-center"
                src="/aa.jpg"
                alt="avatar"
              />
            </div>
            <div className="ml-4">
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
