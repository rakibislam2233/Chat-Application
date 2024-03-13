import { useSelector } from "react-redux";

export const userChatPartner = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { partner, isActive } = useSelector((state) => state.chatPartner);
  return [partner, isActive];
};
