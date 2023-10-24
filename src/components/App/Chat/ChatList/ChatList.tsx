import "./ChatList.scss";
import ChatListUser from "./ChatListUser/ChatListUser";

const ChatList = (props: {
  handleSelectChat: Function;
  setStatus: Function;
  chatList: Array<any>;
}) => {
  const { handleSelectChat, chatList } = props;

  return (
    <section className="chat-list">
      {chatList?.map((x, key) => (
        <ChatListUser key={key} handleSelectChat={handleSelectChat} {...x} />
      ))}
    </section>
  );
};

export default ChatList;
