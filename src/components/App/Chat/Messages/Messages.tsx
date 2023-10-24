import { useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import "./Messages.scss";
import { useSelector } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import { pullFirebaseMessagesQuery } from "firebaseApp/FirebaseUtils";
import { scrollChatToBottom } from "utils/helper";

const Messages = (props: { selectedChat: any }) => {
  const { selectedChat } = props;
  const { user } = useSelector((state: any) => state.auth);

  const [messageList, setMessageList] = useState([]);
  let dummyRef = useRef<any>();

  useEffect((): any => {
    const unsubscribe = onSnapshot(
      pullFirebaseMessagesQuery(user?._id, selectedChat?._id),
      (QuerySnapshot: any) => {
        const fetchedMessages: any = [];
        QuerySnapshot.forEach((doc: any) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });

        const sortedMessages = fetchedMessages.sort(
          (a: any, b: any) => a.createdAt - b.createdAt
        );

        setMessageList(sortedMessages);
      }
    );
    return () => unsubscribe;

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    scrollChatToBottom(dummyRef);
    // eslint-disable-next-line
  }, [messageList]);

  return (
    <section className="messages">
      {messageList?.map(({ content, senderId, messageTime }, key) => (
        <Message
          key={key}
          date={messageTime}
          message={content}
          sender={senderId === user?._id ? "YOU" : "OTHER"}
        />
      ))}
      <div ref={dummyRef}></div>
    </section>
  );
};

export default Messages;
