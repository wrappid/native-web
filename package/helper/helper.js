import { createFilterOptions as nativeFilterOptions } from "@mui/material/Autocomplete";

export const getNativeDeviceDetails = () => {
    let device = null;
    let deviceBrand = null;
    let deviceOS = null;
    let deviceOSVersion = null;
    let browser = null;
    let browserVersion = null;
    
    return {
        name: device,
        brand: deviceBrand,
        os: deviceOS,
        osVersion: deviceOSVersion,
        browser: browser,
        browserVersion: browserVersion
    };
};

export { nativeFilterOptions }