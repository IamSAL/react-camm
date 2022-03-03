export function isMacintosh() {
  return navigator.userAgentData.platform.indexOf("Mac") > -1;
}

export function isWindows() {
  //   return navigator.userAgentData.platform.indexOf("Win") > -1;
  return true;
}
