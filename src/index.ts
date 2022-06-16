import { initialize } from 'launchdarkly-js-client-sdk';
import { init, LDOptions, LDClient, LDUser } from 'launchdarkly-node-server-sdk';

export const initBrowserSdk = (clientSideId: string) => {
  console.log(`initializing ld client with ${clientSideId}...`);

  const options = {
    bootstrap: window.ssrFlags,
  };
  window.ldClientBrowser = initialize(clientSideId, { anonymous: true }, options);
};

let client: null | LDClient = null;

export const initServerSdk = async (clientSideId: string, options: LDOptions = {}) => {
  client = init(clientSideId, options);
  await client?.waitForInitialization();
  return client;
};

/**
 * This will be used to bootstrap the client side flags when
 * rendering from the server.
 * @param user
 * @returns
 */
export const renderFlagsToString = async (user: LDUser) => {
  if (!client) {
    return '';
  }
  const flagData = (await client?.allFlagsState(user))?.toJSON();
  const flagDataString = JSON.stringify(flagData, null, 2);
  return `window.ssrFlags=${flagDataString};`;
};
