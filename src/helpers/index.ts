export const helpers = {
  isUrl: (url: string) => {
    // eslint-disable-next-line
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gm;
    return regex.test(url);
  }
};
