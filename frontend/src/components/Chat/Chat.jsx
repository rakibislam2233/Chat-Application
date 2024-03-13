import { useEffect, useRef } from "react";
import { userChatPartner } from "../../hook/userChatPartner";
import Blank from "./Blank";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addActiveFriends } from "../../fetures/activeFriendsSlice/activeFriendsSlice";
import useAuth from "../../hook/useAuth";
const Chat = () => {
  const [partner, isActive] = userChatPartner();
  const user = useAuth();
  const socket = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    socket.current = io("http://localhost:8000");
  }, []);

  useEffect(() => {
    if (socket) {
      socket.current.emit("addUser", user?._id, user);
      socket.current.on("onlineUser", (activeUsers) => {
        dispatch(addActiveFriends(activeUsers));
      });
    }
  }, [dispatch, socket, user]);
  return (
    <div className="w-full col-span-8">
      {Object.keys(partner)?.length === 0 ? (
        <Blank />
      ) : (
        <>
          <ChatHead partner={partner} isActive={isActive} />
          <Messages partner={partner} isActive={isActive} />
          <SendMessage partner={partner} />
        </>
      )}
    </div>
  );
};

export default Chat;
