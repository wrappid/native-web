import React from "react";
import { useState } from "react";
import { UtilityClasses } from "@wrappid/styles";
import NativeSpan from "../../layouts/NativeSpan";
import NativeLink from "../../navigation/NativeLink";
import NativeTypography from "../NativeTypography";

export default function NativeTypographyBody2(props) {
  const { hideSeeMore = false, limitChars } = props;

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return limitChars ? (
    <NativeTypography {...props} variant="body2" gutterBottom>
      <NativeSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </NativeSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <NativeLink
          styleClasses={[UtilityClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}
        >
          {seeMore ? "See more" : "See less"}
        </NativeLink>
      )}
    </NativeTypography>
  ) : (
    <NativeTypography {...props} variant="body2" gutterBottom>
      {props?.children}
    </NativeTypography>
  );
}
