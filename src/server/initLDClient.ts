import { init, LDClient } from 'launchdarkly-node-server-sdk';

let ldClient: LDClient;

const initLDClient = (sdkKey: string) => {
  ldClient = init(sdkKey);
  return ldClient;
};

export { initLDClient, ldClient };

export default initLDClient;
