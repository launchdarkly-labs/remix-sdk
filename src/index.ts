import { initialize } from 'launchdarkly-js-client-sdk';

export const initBrowser = (clientSideId: string) => {
  const options = {
    bootstrap: document.getElementById('ssr-flags') ?? {},
  };
  console.log('initializing ld client...');
  window.ldClientBrowser = initialize(clientSideId, { anonymous: true }, options);
};
