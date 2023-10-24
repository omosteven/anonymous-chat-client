import { Button, Input } from "components/ui";
import "./GetStarted.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import API from "utils/api/API";
import { apiQueryMethods, apiUrls } from "utils/api";
import toastMessage from "utils/toast";
import { getErrorMessage } from "utils/helper";
import { updateAuthInfo } from "store/auth/actions";
import { setAuthToken } from "storage";

const GetStarted = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const getStarted = (data: any) => {
    setLoading(true);
    API({
      method: apiQueryMethods?.POST,
      url: apiUrls?.authenticate,
      data,
    })
      .then((resp) => {
        setLoading(false);
        toastMessage("User session started");
        const { token, user } = resp.data;
        setAuthToken(token);
        dispatch<any>(updateAuthInfo({ token, user }));
        reset();
        navigate("/chat");
      })
      .catch((err) => {
        const errMsg = getErrorMessage(err);
        setLoading(false);
        toastMessage(errMsg, true);
      });
  };

  const onSubmit = (data: any) => {
    getStarted(data);
  };

  return (
    <div className="get-started">
      <h1>Chat Anonymousely!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Enter your email"
          register={register}
          type="email"
          name="email"
          hasError={Boolean(errors?.email)}
          required
        />
        <Button text="Get Started" isLoading={loading} />
      </form>
    </div>
  );
};

export default GetStarted;
