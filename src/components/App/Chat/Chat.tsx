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
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "store/chat/actions";
import { onSnapshot } from "firebase/firestore";

import { pullFirebaseCollections } from "firebaseApp/FirebaseUtils";

const { CHAT_MESSAGES, CHAT_LIST } = CHAT_STAGES;
const { LOADING, NULLMODE, DATAMODE, ERROR } = dataQueryStatus;

const Chat = () => {
  const [stage, setStage] = useState(CHAT_LIST);
  const [status, setStatus] = useState(LOADING);
  const { selectedChat } = useSelector((state: any) => state.chat);
  const { user } = useSelector((state: any) => state.auth);
  const [chatUserIds, updateChatUserIds] = useState([]);

  const dispatch = useDispatch();

  const handleChatStage = () => {
    setStage(stage === CHAT_MESSAGES ? CHAT_LIST : CHAT_MESSAGES);

    if (stage === CHAT_MESSAGES) {
      dispatch<any>(setSelectedChat({}));
    }
  };

  const handleSelectChat = (data: any) => {
    setStage(CHAT_MESSAGES);
    setStatus(DATAMODE);
    dispatch<any>(setSelectedChat(data));
  };

  const renderBasedOnChatStage = () => {
    switch (stage) {
      case CHAT_MESSAGES:
        return (
          <>
            <Messages selectedChat={selectedChat} />{" "}
            <ChatInput selectedChat={selectedChat} />
          </>
        );
      case CHAT_LIST:
        return (
          <>
            <ChatList
              chatList={chatUserIds}
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

    const unsubscribe = onSnapshot(
      pullFirebaseCollections(user?._id),

      (QuerySnapshot: any) => {
        const fetchedChatList: any = [];
        QuerySnapshot.forEach((doc: any) => {
          fetchedChatList.push({ ...doc.data(), id: doc.id });
        });

        updateChatUserIds(fetchedChatList);
      }
    );

    return () => unsubscribe;
  };

  console.log({ chatUserIds });

  useEffect((): any => {
    getChatList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedChat?._id) {
      setStage(CHAT_MESSAGES);
    }
  }, [selectedChat]);

  return (
    <div className="chat">
      <ChatHeader
        handleChatStage={handleChatStage}
        chatStage={stage}
        selectedChat={selectedChat}
      />
      {renderBasedOnStatus()}
      {stage === CHAT_LIST && <ChatProfileButton />}
    </div>
  );
};

export default Chat;
