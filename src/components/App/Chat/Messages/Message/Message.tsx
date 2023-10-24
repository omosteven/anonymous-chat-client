import { Icon } from "components/ui";
import "./Message.scss";

const Message = (props: {
  sender: String;
  date: String;
  message: String;
  lastTimestamp?: string;
}) => {
  const { sender, message, date, lastTimestamp } = props;
  const extraClass = `${sender === "YOU" ? "sent" : ""}`;

  return (
    // <div className={`message ${extraClass}`}>
    //   <div className="message-user">
    //     <Icon icon="avatar" />
    //   </div>
    //   <div className={`arrow ${extraClass}`}>
    //     <div className={`inner ${extraClass}`}></div>
    //   </div>
    //   <div className={`message-body ${extraClass}`}>
    //     <p>{message}</p>
    //     <span>{date}</span>
    //     <Icon icon="delete" className="delete-message" />
    //   </div>
    // </div>
    <div className={`message ${extraClass}`}>
      <div className={`message__user ${extraClass}`}>
        <Icon icon="avatar" />
      </div>
      <div className={`message__body ${extraClass}`}>
        <div className="message__body__top">
          <p>{message}</p>
          {lastTimestamp && <span>{lastTimestamp}</span>}
        </div>
        <span>{date}</span>
        <Icon icon="delete" className={`message__delete ${extraClass}`} />
      </div>
    </div>
  );
};

export default Message;
