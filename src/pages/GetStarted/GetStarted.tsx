import { Button, Input } from "components/ui";
import "./GetStarted.scss";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/chat");
  };
  
  return (
    <div className="get-started">
      <h1>Chat Anonymousely!</h1>
      <form>
        <Input label="Email" placeholder="Enter your email" />
        <Button text="Get Started" onClick={getStarted} />
      </form>
    </div>
  );
};

export default GetStarted;
