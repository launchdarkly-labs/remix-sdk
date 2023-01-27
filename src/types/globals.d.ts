import { LDClient, LDFlagSet, LDSingleKindContext } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
    ssrFlags: LDFlagSet;
    ldUser: LDSingleKindContext;
    clientSideID: string;
  }
}
