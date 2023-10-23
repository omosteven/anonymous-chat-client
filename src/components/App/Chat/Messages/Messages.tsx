import Message from "./Message/Message";
import "./Messages.scss";

const messages = [
  {
    sender: "YOU",
    message: "Hi, how are you doing",
    date: "02/10/2023",
  },
  {
    sender: "OTHER",
    message: "I am doing very great",
    date: "02/10/2023",
  },
  {
    sender: "YOU",
    message: "Hi, how are you doing",
    date: "02/10/2023",
  },
  {
    sender: "OTHER",
    message: "I am doing very great",
    date: "02/10/2023",
  },
  {
    sender: "YOU",
    message: "Hi, how are you doing",
    date: "02/10/2023",
  },
  {
    sender: "OTHER",
    message: "I am doing very great",
    date: "02/10/2023",
  },
  {
    sender: "YOU",
    message: "Hi, how are you doing",
    date: "02/10/2023",
  },
  {
    sender: "OTHER",
    message: "I am doing very great",
    date: "02/10/2023",
  },
];

const Messages = () => {
  return (
    <section className="messages">
      {messages?.map((message, key) => (
        <Message key={key} {...message} />
      ))}
    </section>
  );
};

export default Messages;
