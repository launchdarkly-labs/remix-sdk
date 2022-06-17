import type { LDClient, LDFlagSet } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
    ssrFlags: LDFlagSet;
  }
  
}
