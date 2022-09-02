import { LDClient, LDFlagSet, LDUser } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
    ssrFlags: LDFlagSet;
    ldUser: LDUser;
    clientSideID: string;
  }
}
