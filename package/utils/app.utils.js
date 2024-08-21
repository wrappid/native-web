/**
 * Copy text to clipboard
 * 
 * @param {*} text 
 * @returns boolean
 */
export async function native_copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      return true;
    })
    .catch(err => {
      throw err;
    });
}