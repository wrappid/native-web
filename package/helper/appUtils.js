export const getUUID = () => {
  let date = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (positionalCharValue) {
      let random = (date + Math.random() * 16) % 16 | 0;

      date = Math.floor(date / 16);
      return (positionalCharValue === "x" ? random : (random & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
  // return window.self.crypto.randomUUID();
};

export const getTimestamp = () => {
  return new Date().getTime();
};

