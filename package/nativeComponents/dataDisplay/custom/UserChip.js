import React from "react";
import config from "../../../config/config";
import { HTTP_GET } from "../../../config/constants";
import axiosInterceptor from "../../../middleware/axiosInterceptor";
import authHeader from "../../../service/DataService";
import { getFullName } from "../../../utils/helper";
import NativeAvatar from "../NativeAvatar";
import NativeChip from "../NativeChip";
import NativeTypographyCaption from "../paragraph/NativeTypographyCaption";
import { CoreClasses } from "@wrappid/styles";

export default function UserChip(props) {
  const {
    userid,
    _firstName = "",
    _middleName = "",
    _lastName = "",
    _email = "",
    _photoUrl = "",
  } = props;
  const [firstName, setFirstName] = React.useState(_firstName);
  const [middleName, setMiddleName] = React.useState(_middleName);
  const [lastName, setLastName] = React.useState(_lastName);
  const [email, setEmail] = React.useState(_email);
  const [photoUrl, setPhotoUrl] = React.useState(_photoUrl);

  React.useEffect(() => {
    async function apiCall() {
      await axiosInterceptor({
        method: HTTP_GET,
        url:
          config.backendUrl +
          "/business/individual/UserBasicInfo?_defaultFilter=" +
          encodeURIComponent(JSON.stringify({ "Users.id": userid })),
        headers: await authHeader(true),
      })
        .then((response) => {
          setFirstName(response?.data?.data?.data["Person.firstName"]);
          setMiddleName(response?.data?.data?.data["Person.middleName"]);
          setLastName(response?.data?.data?.data["Person.lastName"]);
          setEmail(response?.data?.data?.data["email"]);
          setPhotoUrl(response?.data?.data?.data["Person.photoUrl"]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (
      _firstName === "" &&
      _middleName === "" &&
      _lastName === "" &&
      _photoUrl === ""
    ) {
      apiCall();
    }
  }, [userid]);

  let displayName = "";
  if (firstName === "" && middleName === "" && lastName === "") {
    displayName = email;
  } else {
    displayName = getFullName({ firstName, middleName, lastName });
  }

  return (
    <NativeChip
      size="small"
      avatar={
        <NativeAvatar
          styleClasses={[CoreClasses.BORDER.BORDER_0]}
          src={photoUrl || "photo.jpg"}
        />
      }
      label={
        <NativeTypographyCaption limitChars={12} hideSeeMore={true}>
          {displayName}
        </NativeTypographyCaption>
      }
    />
  );
}
