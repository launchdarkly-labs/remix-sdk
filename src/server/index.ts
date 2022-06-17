import { init, LDOptions, LDClient, LDUser } from 'launchdarkly-node-server-sdk';
import LDProviderServer from './provider'
import context from './context';
import { useContext } from 'react';
let client: null | LDClient = null;

export const initServerSdk = async (sdkKey: string, options: LDOptions = {}) => {
  client = init(sdkKey, options);
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
  const { ldClient } = useContext(context)
  if (!ldClient) {
    console.error(`LD client is not initialized.`);
    return '';
  }
  const flagData = (await ldClient?.allFlagsState(user))?.toJSON();
  const flagDataString = JSON.stringify(flagData, null, 2);
  return `window.ssrFlags=${flagDataString};`;
};

export { LDProviderServer } 
