const handleStateChange_ = (prevRequsetState, requsetsState) => (
  stateKey,
  cb,
) => {
  if (!prevRequsetState[stateKey] && requsetsState[stateKey]) {
    return cb(requsetsState[stateKey]);
  }

  return null;
};

export const handleStateChange = (stateKey, cb) => (
  prevRequsetState,
  requsetsState,
) => {
  if (!prevRequsetState[stateKey] && requsetsState[stateKey]) {
    return cb(requsetsState[stateKey]);
  }

  return null;
};

export default handleStateChange_;
