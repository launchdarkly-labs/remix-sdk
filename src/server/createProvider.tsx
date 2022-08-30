/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { init, LDUser } from 'launchdarkly-node-server-sdk';

import { Provider } from '../shared/context';

// TODO: fix this
export let ldClient: any;

const createProvider = async (sdkKey: string, user: LDUser) => {
  if (!ldClient) {
    ldClient = await init(sdkKey);
    await ldClient.waitForInitialization();
  }

  console.log('Initialized ld node client...');
  let flags = await ldClient.allFlagsState(user);
  flags = flags.toJSON();
  const LDProvider = ({ children }: { children: ReactNode }) => {
    return (
      <Provider
        value={{
          flags,
          ldClient,
          user,
        }}
      >
        {children}
      </Provider>
    );
  };

  return LDProvider;
};

export default createProvider;
