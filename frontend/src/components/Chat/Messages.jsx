/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useGetMessageQuery } from "../../fetures/message/messageApi";
import ParticipentProfile from "./ParticipentProfile";
import MessageSkeleton from "../MessageSkeleton";
import Message from "./Message";
const Messages = ({ partner }) => {
  const [enable, setEnable] = useState(false);
  const lastMessageRef = useRef();
  const {
    data: messages,
    isLoading,
    isError,
    // error,
  } = useGetMessageQuery(partner?._id, {
    skip: !enable,
  });
  useEffect(() => {
    if (partner?._id) {
      setEnable(true);
    }
  }, [partner]);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  let content = null;
  if (isLoading && !isError) {
    content = (
      <div>
        <MessageSkeleton />
        <MessageSkeleton />
        <MessageSkeleton />
        <MessageSkeleton />
      </div>
    );
  } else if (!isLoading && !isError && messages?.data?.length === 0) {
    content = <h1>No Data Available</h1>;
  } else if (!isLoading && !isError && messages?.data?.length > 0) {
    content = messages?.data?.map((message) => (
      <div key={message?._id} ref={lastMessageRef}>
        <Message message={message} />
      </div>
    ));
  }
  return (
    <div className="w-full h-[75vh]  overflow-hidden overflow-y-scroll px-3 py-2">
      <ParticipentProfile partner={partner} />
      <div className="space-y-2">{content}</div>
    </div>
  );
};

export default Messages;
