import { LDFlagSet } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    clientSideID: string;
    ssrFlags: LDFlagSet;
  }
}
