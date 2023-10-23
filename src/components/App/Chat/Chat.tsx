import { useEffect, useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatInput from "./ChatInput/ChatInput";
import ChatList from "./ChatList/ChatList";
import Messages from "./Messages/Messages";
import { CHAT_STAGES } from "./enums";
import ChatProfileButton from "./ChatProfileButton/ChatProfileButton";
import { dataQueryStatus } from "utils/dataQueryStatus";
import { EmptyView, ErrorView, Loader } from "components/ui";

const { CHAT_MESSAGES, CHAT_LIST } = CHAT_STAGES;
const { LOADING, NULLMODE, DATAMODE, ERROR } = dataQueryStatus;

const Chat = () => {
  const [stage, setStage] = useState(CHAT_LIST);
  const [status, setStatus] = useState(LOADING);

  const handleChatStage = () => {
    setStage(stage === CHAT_MESSAGES ? CHAT_LIST : CHAT_MESSAGES);
  };

  const handleSelectChat = () => {
    setStage(CHAT_MESSAGES);
    setStatus(DATAMODE);
  };

  const renderBasedOnChatStage = () => {
    switch (stage) {
      case CHAT_MESSAGES:
        return (
          <>
            <Messages /> <ChatInput />
          </>
        );
      case CHAT_LIST:
        return (
          <>
            <ChatList
              handleSelectChat={handleSelectChat}
              setStatus={setStatus}
            />
          </>
        );
      default:
        return "";
    }
  };

  const renderBasedOnStatus = () => {
    switch (status) {
      case LOADING:
        return (
          <div className="chat__non-chats">
            <Loader loaderType="RIPPLE" hideLoaderText />
          </div>
        );
      case NULLMODE:
        return (
          <div className="chat__non-chats">
            <EmptyView message="No Chats Available" />
          </div>
        );
      case DATAMODE:
        return renderBasedOnChatStage();
      case ERROR:
        return (
          <div className="chat__non-chats">
            <ErrorView />
          </div>
        );
      default:
        return "";
    }
  };

  const getChatList = () => {
    setTimeout(() => {
      setStatus(DATAMODE);
    }, 3000);
  };

  useEffect(() => {
    getChatList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="chat">
      <ChatHeader handleChatStage={handleChatStage} chatStage={stage} />
      {renderBasedOnStatus()}
      {stage === CHAT_LIST && <ChatProfileButton />}
    </div>
  );
};

export default Chat;
