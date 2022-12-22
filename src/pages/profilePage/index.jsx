import { useAuth } from "@/components/AuthContext";
import Button from "@/components/Button";
import Field from "@/components/Field";
import { useAsync } from "@/hooks/useAsync";
import { useForm } from "@/hooks/useForm";
import { userService } from "@/services/user";
import { message } from "antd";
import React from "react";

import { useScrollTop } from "../../hooks/useScrollTop";
import { handleError } from "../../utils/handleError";
import { regexp, required } from "../../utils/validate";

export default function Profile() {
  useScrollTop();
  const { user, setUser } = useAuth();
  const { loading, excute: updateInfoService } = useAsync(
    userService.updateInfo
  );
  const { register, values, validate } = useForm(
    {
      name: [required()],
      phone: [required(), regexp("phone")],
      fb: [required(), regexp("facebook")],
    },
    user
  );
  const onSubmit = async () => {
    try {
      if (validate()) {
        const res = await updateInfoService(values);

        setUser(res.data);
        message.success("Bạn đã cập nhật thông tin tài khoản thành công.");
      }
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <div className="tab1">
      <Field
        {...register("name")}
        label="Họ và tên"
        placeholder={user.name}
        required
      />
      <Field
        {...register("phone")}
        label="Số điện thoại"
        placeholder="0949******"
        required
      />
      <Field {...register("username")} label="Email" disabled />
      <Field
        {...register("fb")}
        label="Facebook"
        placeholder="Facebook Url"
        required
      />

      <Button loading={loading} onClick={onSubmit}>
        LƯU LẠI
      </Button>
    </div>
  );
}
