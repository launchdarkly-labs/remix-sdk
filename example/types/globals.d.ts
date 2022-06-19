import { LDFlagSet } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    LD_CLIENT_SIDE_ID: string;
    ssrFlags: LDFlagSet;
  }
}
