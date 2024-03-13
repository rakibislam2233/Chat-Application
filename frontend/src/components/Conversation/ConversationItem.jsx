/* eslint-disable react/prop-types */
import gravatarUrl from "gravatar-url";
import { useDispatch, useSelector } from "react-redux";
import { startChat } from "../../fetures/chatPartner/chatPartnerSlice";
import { userChatPartner } from "../../hook/userChatPartner";
import useAuth from "../../hook/useAuth";
const ConversationItem = ({ user }) => {
  const authUser = useAuth();
  const { activeFriends } = useSelector((state) => state.activeFriends);
  const participants = user?.participants?.find(
    (u) => u?._id !== authUser?._id
  );
  const onlineUser = activeFriends?.find(
    (u) => u?.userId === participants?._id
  );
  const isActive = onlineUser ? true : false;
  const lastMessage = user?.messages[0];
  const [partner] = userChatPartner();
  const dispatch = useDispatch();
  const myLastMessage = lastMessage?.senderId === authUser?._id;
  return (
    <>
      <div
        onClick={() => dispatch(startChat({ participants, isActive }))}
        className={`flex justify-between  items-center gap-4 hover:bg-gray-800 px-3 py-2 cursor-pointer text-left ${
          participants?._id === partner?._id && "bg-gray-800"
        }`}
      >
        <div className="flex items-center gap-2 ">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-full"
              src={
                participants?.profileImage ||
                gravatarUrl(participants?.email, { size: 200 })
              }
              alt=""
            />
            {onlineUser && (
              <div className=" absolute w-3 h-3 rounded-full right-1 bottom-0 bg-green-500"></div>
            )}
          </div>
          <div>
            <h1 className="font-semibold">{participants?.name}</h1>
            <p className="text-xs">
              {myLastMessage && "You:"}{" "}
              {lastMessage?.message?.length > 20
                ? `${lastMessage?.message?.slice(0, 20)}...`
                : lastMessage?.message}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationItem;
