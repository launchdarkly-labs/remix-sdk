import { ldClient } from './initLDClient';

export const generateLDWindowValues = async (clientSideID: string) => {
  const flagData = await ldClient.allFlagsState({ key: 'test', anonymous: true });
  const flagDataString = JSON.stringify(flagData, null, 2);
  return `window.LD_CLIENT_SIDE_ID='${clientSideID}';window.ssrFlags=${flagDataString}`;
};

export default generateLDWindowValues;
