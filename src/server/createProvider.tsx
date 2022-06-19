/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { init, LDUser } from 'launchdarkly-node-server-sdk';

import { Provider } from '../shared/context';

export let ldClient: any;

const createProvider = async (sdkKey: string, user: LDUser) => {
  if (!ldClient) {
    ldClient = await init(sdkKey);
    await ldClient.waitForInitialization();
  }

  console.log('Initialized ld node client...');
  const flags = await ldClient.allFlagsState(user);
  // console.log(`flags: ${JSON.stringify(flags)}`);
  const LDProvider = ({ children }: { children: ReactNode }) => {
    return (
      <Provider
        value={{
          flags,
          ldClient,
        }}
      >
        {children}
      </Provider>
    );
  };

  return LDProvider;
};

export default createProvider;
