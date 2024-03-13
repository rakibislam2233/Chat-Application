import { useGetConversationQuery } from "../../fetures/conversation/conversationApi";
import ConversationItem from "./ConversationItem";

const ConversationList = () => {
  const {
    data: conversation,
    isLoading,
    isError,
  } = useGetConversationQuery();
  let content = null;
  if (isLoading && !isError) {
    content = (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  } else if (!isLoading && !isError && conversation?.data?.length === 0) {
    content = (
      <div>
        <h1>No Data Avaibale</h1>
      </div>
    );
  } else if (!isLoading && !isError && conversation?.data?.length > 0) {
    content = conversation?.data?.map((user, i) => (
      <ConversationItem key={i} user={user} />
    ));
  }
  return (
    <div className="w-full h-[85vh] overflow-hidden overflow-y-scroll space-y-2">
      {content}
    </div>
  );
};

export default ConversationList;
