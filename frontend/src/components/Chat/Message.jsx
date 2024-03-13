/* eslint-disable react/prop-types */
import gravatarUrl from "gravatar-url";
import { userChatPartner } from "../../hook/userChatPartner";
import useAuth from "../../hook/useAuth";

const Message = ({ message }) => {
  const user = useAuth() || {};
  const [partner] = userChatPartner();
  const { email, profileImage } = partner || {};
  const fromMe = message?.senderId === user?._id;
  //   const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-[#1CC0A9]" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        {fromMe !== true && (
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profileImage || gravatarUrl(email || 'example@gmail.com', { size: 80 })}
            />
          </div>
        )}
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} py-2`}>
        {message?.message}
      </div>
    </div>
  );
};

export default Message;
