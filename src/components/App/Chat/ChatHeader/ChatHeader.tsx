import { Button, Icon } from "components/ui";
import "./ChatHeader.scss";
import { CHAT_STAGES } from "../enums";
import { useDispatch } from "react-redux";
import { useState } from "react";
import API from "utils/api/API";
import { apiQueryMethods, apiUrls } from "utils/api";
import { setSelectedChat } from "store/chat/actions";
import { getErrorMessage } from "utils/helper";
import toastMessage from "utils/toast";

const { CHAT_LIST } = CHAT_STAGES;

const ChatHeader = (props: {
  handleChatStage: Function;
  chatStage: string;
  selectedChat: any;
}) => {
  const { handleChatStage, chatStage, selectedChat } = props;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const startNewChat = () => {
    setLoading(true);
    API({
      method: apiQueryMethods?.GET,
      url: apiUrls?.startNewChat,
    })
      .then((resp) => {
        const { data } = resp.data;
        console.log({ data });
        dispatch<any>(setSelectedChat(data));
        setLoading(false);
      })
      .catch((err) => {
        const errMsg = getErrorMessage(err);
        setLoading(false);
        toastMessage(errMsg, true);
      });
  };

  const chatUserName = selectedChat?.userName || "Anon";
  
  return (
    <section className="chat-header">
      <div>
        {chatStage !== CHAT_LIST && (
          <Icon icon="back" onClick={() => handleChatStage()} />
        )}
        <p>{chatStage === CHAT_LIST ? "Recent Chats" : chatUserName}</p>
      </div>
      {chatStage !== CHAT_LIST ? (
        <div>
          <Icon icon="caret" />
        </div>
      ) : (
        <Button
          text="New Chat"
          isLoading={loading}
          onClick={() => startNewChat()}
        />
      )}
    </section>
  );
};

export default ChatHeader;
