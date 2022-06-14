import { initialize } from 'launchdarkly-js-client-sdk';

export const initBrowser = (clientSideId: string) => {
  const options = {
    bootstrap: document.getElementById('ssr-flags') ?? {},
  };
  window.ldClientBrowser = initialize(clientSideId, { anonymous: true }, options);
};
