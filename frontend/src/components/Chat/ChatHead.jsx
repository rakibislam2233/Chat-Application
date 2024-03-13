/* eslint-disable react/prop-types */
import gravatarUrl from "gravatar-url";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
const ChatHead = ({ partner, isActive }) => {
  return (
    <div className="w-full flex justify-between items-center p-5 border-b border-gray-800">
      <div className="flex items-center gap-2 ">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full"
            src={
              partner?.profileImage ||
              gravatarUrl(partner?.email || "rakib2020.tkg@gmail.com", { size: 200 })
            }
            alt=""
          />
          {isActive && (
            <div className=" absolute w-3 h-3 rounded-full right-1 bottom-0 bg-green-500"></div>
          )}
        </div>
        <div>
          <h1 className="font-semibold">{partner?.name}</h1>
          {
            isActive ? <h1 className="text-xs font-semibold">Active Now</h1> : <h1 className="text-xs font-semibold">Offline</h1>
          }
        </div>
      </div>
      <div className="flex gap-5">
        <button className="w-10 h-10 rounded-full hover:bg-gray-700 transition-all duration-300">
          <IoCallOutline className="w-6 h-6 mx-auto" />
        </button>
        <button className="w-10 h-10 rounded-full hover:bg-gray-700 transition-all duration-300">
          <IoVideocamOutline className="w-6 h-6 mx-auto" />
        </button>
        <button className="w-10 h-10 rounded-full hover:bg-gray-700 transition-all duration-300">
          <TbListDetails className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default ChatHead;
