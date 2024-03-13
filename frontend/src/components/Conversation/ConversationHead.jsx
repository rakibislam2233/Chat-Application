import { FiEdit } from "react-icons/fi";
import useAuth from "../../hook/useAuth";
import MyModal from "../MyModal";
import { useState } from "react";

const ConversationHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuth();

  return (
    <div className="w-full flex justify-between px-5 py-8 border-b border-gray-800">
      <h1 className="font-semibold">{user?.name}</h1>
      <button onClick={()=>setIsOpen(true)} >
        <FiEdit className="w-5 h-5" />
      </button>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ConversationHead;
