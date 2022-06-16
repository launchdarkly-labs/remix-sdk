import { initialize } from 'launchdarkly-js-client-sdk';

export const initBrowserSdk = (clientSideId: string) => {
  console.log(`initializing ld client with ${clientSideId}...`);

  const options = {
    bootstrap: window.ssrFlags,
  };
  window.ldClientBrowser = initialize(clientSideId, { anonymous: true }, options);
};
