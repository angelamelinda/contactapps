import { helpers } from ".";

export const validate = {
  emptyString: (value: string) => {
    if (!value || value.trim() === "") {
      return "Required";
    }

    return "";
  },
  minNumber: (min: number, value: number) => {
    if (value < min) {
      return `Minimum ${min}`;
    }

    return "";
  },
  emptyStringAndUrl: (url: string) => {
    if (!url || url.trim() === "") {
      return "Required";
    }

    if (!helpers.isUrl(url)) {
      return "Invalid Url";
    }

    return "";
  }
};
