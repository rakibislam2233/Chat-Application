/* eslint-disable react/prop-types */
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { LuSticker } from "react-icons/lu";
import { useSendMessageMutation } from "../../fetures/message/messageApi";
import { useEffect } from "react";
import useAuth from "../../hook/useAuth";
const SendMessage = ({ partner }) => {
  const { _id } = partner;
  const [sendMessage, { data, error }] = useSendMessageMutation();
  const authUser = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    sendMessage({
      senderId:authUser?._id,
      partnerId: _id,
      data: { message },
    });
    form.reset()
  };

  useEffect(() => {
    if (data) {
      console.log();
    } else if (error) {
      console.log(error);
    }
  }, [data, error]);
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-2">
      <div>
        <CiCirclePlus className="w-7 h-7 cursor-pointer" />
      </div>
      <div>
        <CiImageOn className="w-7 h-7 cursor-pointer" />
      </div>
      <div>
        <LuSticker className="w-7 h-7 cursor-pointer" />
      </div>
      <input
        type="text"
        name="message"
        id="message"
        required
        placeholder="Enter your message"
        className="w-full bg-transparent border border-gray-700 rounded-full px-3 py-2 focus:outline-none"
      />
      <button>Send</button>
    </form>
  );
};

export default SendMessage;
