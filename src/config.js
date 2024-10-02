
const mainlink='http://192.168.13.249:3001';
const config = {
    loginapi: `${mainlink}/stafflogin`,
    changePasswordApi: `${mainlink}/change-password-staff`,
    verifytoken: `${mainlink}/verifytoken`,
    logoutapi: `${mainlink}/stafflogout`,
    addstaffapi: `${mainlink}/addStaffDetails`,
    fetchstaffapi: `${mainlink}/getstaffdetails`,
    validatestaffapi: `${mainlink}/connexStaffRegister`,
    fetchstaffLogsApi: `${mainlink}/getstafflogs`,
    fetchpartnerLogsApi: `${mainlink}/getpartnerlogs`,
    mainlink: `${mainlink}`
};

export default config;