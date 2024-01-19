import { createFilterOptions as nativeFilterOptions } from "@mui/material/Autocomplete";
import moment from "moment";
function getValidDateTime(dateTimeString){
  try{
    return moment(dateTimeString);
  }
  catch(err){
    return "";
  }
}
function queryBuilder(url, query) {
  let newUrl = url;

  if (
    query &&
      Object.keys(query).length > 0 /* &&
      Object.values(query).find((v) => v && v !== "") */
  ) {
    newUrl += "?";
    let keys = Object.keys(query);

    for (let index = 0; index < keys.length; index++) {
      let qKey = keys[index];
  
      // not needed below if statement,
      // because it is not considering the value 0 i.e.treated as false
      // although 0 should be as a parameter value for api query params

      if (index > 0 && newUrl.charAt(newUrl.length - 1) !== "?") {
        newUrl +=
            "&" +
            qKey +
            "=" +
            (typeof query[qKey] === "object" ? JSON.stringify(query[qKey]) : query[qKey]);
      } else {
        newUrl += qKey + "=" + query[qKey];
      }
    }
  }
  return newUrl;
}
export const getNativeDeviceDetails = () => {
  let device = null;
  let deviceBrand = null;
  let deviceOS = null;
  let deviceOSVersion = null;
  let browser = null;
  let browserVersion = null;
    
  return {
    brand         : deviceBrand,
    browser       : browser,
    browserVersion: browserVersion,
    name          : device,
    os            : deviceOS,
    osVersion     : deviceOSVersion
  };
};

export { nativeFilterOptions, queryBuilder, getValidDateTime };