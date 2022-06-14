import { LDClient } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
  }
}
