import { Button, DefaultModal, Input } from "components/ui";
import "./Settings.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { apiQueryMethods, apiUrls } from "utils/api";
import API from "utils/api/API";
import toastMessage from "utils/toast";
import { updateAuthInfo } from "store/auth/actions";
import { getErrorMessage } from "utils/helper";
import Select from "components/ui/Select";
import { USER_GENDERS, USER_RACES } from "./enums";

const Settings = (props: { isOpen: boolean; onClose: Function }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state?.auth);

  const updateProfile = (data: any) => {
    setLoading(true);
    delete data?.token;
    delete data?.race;
    delete data?.gender;
    API({
      method: apiQueryMethods?.PATCH,
      url: apiUrls?.profileUpdate,
      data: {
        userName: data?.userName,
      },
    })
      .then((resp) => {
        setLoading(false);
        toastMessage("User profile updated");
        const { data: updatedDetails } = resp.data;
        dispatch<any>(updateAuthInfo({ user: updatedDetails }));
      })
      .catch((err) => {
        const errMsg = getErrorMessage(err);
        setLoading(false);
        toastMessage(errMsg, true);
      });
  };

  const onSubmit = (data: any) => {
    updateProfile(data);
  };

  useEffect(() => {
    Object?.keys(user)?.forEach((e) => {
      setValue(e, user[e]);
    });
    // eslint-disable-next-line
  }, [user]);

  return (
    <DefaultModal buttonText="Update" hideButton {...props}>
      <form className="settings" onSubmit={handleSubmit(onSubmit)}>
        <h3>Update Settings</h3>
        <Input
          placeholder="Enter username"
          label="Username"
          register={register}
          name="userName"
          hasError={Boolean(errors?.userName)}
          required
        />
        <Select
          options={USER_GENDERS}
          label="Gender"
          register={register}
          name="gender"
          hasError={Boolean(errors?.gender)}
        />
        <Select
          options={USER_RACES}
          label="Race"
          register={register}
          name="race"
          hasError={Boolean(errors?.race)}
        />
        {/* <Checkbox label="Use Race Match" /> */}
        <Button className="close--button" text={"Update"} isLoading={loading} />
      </form>

      {/* <Input placeholder="Enter username" label="Address" /> */}
    </DefaultModal>
  );
};

export default Settings;
