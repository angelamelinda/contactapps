import { helpers } from ".";

export const validate = {
  emptyString: (value: string) => {
    if (!value || value.trim() === "") {
      return "Required";
    }

    return "";
  },
  minMaxNumber: (min: number, max: number, value: number) => {
    if (value > max) {
      return `Maximum ${max}`;
    }
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
