const requestUrl = (url: string, useMock: boolean = false) => {
  // const mockUrl = "https://mock.apifox.com/m1/4275689-3917637-default";
  const mockUrl = "";
  if (!useMock) {
    return `/api${url}`;
  } else {
    return mockUrl + url;
  }
};

export { requestUrl };
