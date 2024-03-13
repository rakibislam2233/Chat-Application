import {
  IoHomeOutline,
  IoSearchOutline,
  IoVideocamOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-full col-span-1 border-r border-gray-800">
      <ul className="flex flex-col gap-5 my-10 justify-center items-center text-center">
        <li>
          <button>
            <IoHomeOutline className="w-6 h-6 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <IoSearchOutline className="w-7 h-7 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <IoVideocamOutline className="w-7 h-7 ml-1 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <IoHeartOutline className="w-7 h-7 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <MdOutlineExplore className="w-7 h-7 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <FiMessageCircle className="w-7 h-7 mx-auto" />
          </button>
        </li>
        <li>
          <button>
            <CiCirclePlus className="w-8 h-8 mx-auto" />
          </button>
        </li>
        <li>
            <button className="w-10 h-10 bg-gray-700 rounded-full"></button>
        </li>
        <li>
          <button>
            <RxHamburgerMenu className="w-7 h-7 mx-auto" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
