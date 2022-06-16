import { init, LDOptions, LDClient, LDUser } from 'launchdarkly-node-server-sdk';

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
    console.error(`LD client is not initialized.`);
    return '';
  }
  const flagData = (await client?.allFlagsState(user))?.toJSON();
  const flagDataString = JSON.stringify(flagData, null, 2);
  return `window.ssrFlags=${flagDataString};`;
};
