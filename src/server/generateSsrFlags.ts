import { ldClient } from './initLDClient';

export const generateSsrFlags = async () => {
  const flagData = await ldClient.allFlagsState({ key: 'test', anonymous: true });
  const flagDataString = JSON.stringify(flagData, null, 2);
  return `window.ssrFlags=${flagDataString};`;
};

export default generateSsrFlags;
