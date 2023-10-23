import { Icon } from "components/ui";
import "./Message.scss";

const Message = (props: { sender: String; date: String; message: String }) => {
  const { sender, message, date } = props;
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
        <p>{message}</p>
        <span>{date}</span>
        <Icon icon="delete" className={`message__delete ${extraClass}`} />
      </div>
    </div>
  );
};

export default Message;
