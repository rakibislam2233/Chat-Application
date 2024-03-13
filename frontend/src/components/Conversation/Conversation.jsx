import ConversationHead from "./ConversationHead";
import ConversationList from "./ConversationList";

const Conversation = () => {
  return (
    <div className="w-ful text-center col-span-3 border-r border-gray-800">
      <ConversationHead />
      <ConversationList />
    </div>
  );
};

export default Conversation;
