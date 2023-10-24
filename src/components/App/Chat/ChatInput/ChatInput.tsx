import { Button, Input } from "components/ui";
import "./ChatInput.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { pushNewFirebaseMessage } from "firebaseApp/FirebaseUtils";

const ChatInput = (props: { selectedChat: any }) => {
  const { selectedChat } = props;
  const { user } = useSelector((state: any) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { message } = data;
    reset();

    const messageStatus = await pushNewFirebaseMessage(
      user?._id,
      selectedChat?._id,
      {
        content: message,
      }
    );

    if (messageStatus) {
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Write Your Message"
        name="message"
        register={register}
        hasError={Boolean(errors?.message)}
        required
      />
      <Button text="" icon={"send"} />
    </form>
  );
};

export default ChatInput;
