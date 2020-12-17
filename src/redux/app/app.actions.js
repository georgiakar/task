import * as appTypes from "./app.types";

export const enableLoader = () => ({
  type: appTypes.ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: appTypes.DISABLE_LOADER,
});