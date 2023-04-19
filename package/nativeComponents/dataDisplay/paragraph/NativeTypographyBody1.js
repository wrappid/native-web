import React from "react";
import { useState } from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeSpan from "../../layouts/NativeSpan";
import NativeLink from "../../navigation/NativeLink";
import NativeTypography from "../NativeTypography";

export default function NativeTypographyBody1(props) {
  const { hideSeeMore = false, limitChars } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <NativeTypography {...props} variant="body1" gutterBottom>
      <NativeSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </NativeSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <NativeLink
          styleClasses={[CoreClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}
        >
          {seeMore ? "See more" : "See less"}
        </NativeLink>
      )}
    </NativeTypography>
  ) : (
    <NativeTypography {...props} variant="body1" gutterBottom>
      {props?.children}
    </NativeTypography>
  );
}

/*******
 * Sumanta's Code below
 */
// import { useState } from "react";
// import {CoreClasses} from "@wrappid/styles";;
// import NativeLink from "../../navigation/NativeLink";
// import NativeTypography from "../NativeTypography";

// function getChracterFromLine(lineLimit) {
//   /**
//    * @todo: this should return vaalue depending on screen size
//    */
//   return lineLimit * 120;
// }
// /**
//  * @todo
//  * show See more button if required
//  * size of the show more and see less will be very small not more than line height of the text
//  * and also see more and see less should be inline
//  *
//  * by default it will be collapsed - done | bodyLimit default state false
//  *
//  * @param {*} props
//  * @returns
//  */
// export default function NativeBody1(props) {
//   const [bodyLimit, setBodyLimit] = useState(false);
//   const ToggleBodyLimit = () => {
//     setBodyLimit(!bodyLimit);
//   };

//   return props.lineLimit ? (
//     <NativeTypography variant="body1" {...props}>
//       <NativeTypography variant="span">
//         {typeof props.children === "string" && bodyLimit
//           ? getChracterFromLine(props.lineLimit) > props.children.length
//             ? props.children
//             : props.children.slice(0, getChracterFromLine(props.lineLimit)) +
//               " ..."
//           : props.children}
//       </NativeTypography>
//       {getChracterFromLine(props.lineLimit) < props.children.length && (
//         <NativeLink
//           sx={{ paddingLeft: bodyLimit ? 0 : 1 }}
//           onClick={ToggleBodyLimit}
//         >
//           {bodyLimit ? " See More" : " See less"}
//         </NativeLink>
//       )}
//     </NativeTypography>
//   ) : (
//     <NativeTypography variant="body1" {...props}>
//       {props.children}
//     </NativeTypography>
//   );
// }
