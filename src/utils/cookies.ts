export const setCookie = (name: string, value: string, path?: string) => {
  document.cookie = `${name}=${value}; path=${path ?? "/"}`;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(`${name}=(.+?)(;|$)`)) || [];
  return matches.length ? matches[1] : "";
};

export const deleteCookie = (name: string, path?: string) => {
  document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=${
    path ?? "/"
  }`;
};
