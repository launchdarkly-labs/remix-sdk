import { initialize } from 'launchdarkly-js-client-sdk';
import { init, LDOptions, LDClient, LDUser } from 'launchdarkly-node-server-sdk';

export const initBrowser = (clientSideId: string) => {
  // const options = {
  //   bootstrap: document.getElementById('ssr-flags') ?? {},
  // };
  console.log(`initializing ld client with ${clientSideId}...`);
  // window.ldClientBrowser = initialize(clientSideId, { anonymous: true }, options);
};

let client: null | LDClient = null;

export const initLDServerClient = async (clientSideId: string, options: LDOptions = {}) => {
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
