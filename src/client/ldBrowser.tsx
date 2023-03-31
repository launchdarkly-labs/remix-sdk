import React, { ReactNode, useEffect, useState } from 'react';
import { initialize, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';

import { Provider } from '../shared/context';
import { getFlattenedFlagsFromChangeset } from '../shared/utils';

type LDBrowserProps = { children: ReactNode };

const LDBrowser = ({ children }: LDBrowserProps) => {
  const { ssrFlags, clientSideID, ldUser } = window;
  console.log(`initializing ld client with ${clientSideID}...`);
  const ldClient = initialize(clientSideID, ldUser, { bootstrap: ssrFlags });
  const [ldData, setLDData] = useState({
    flags: ssrFlags,
    ldClient,
    user: ldUser,
  });

  useEffect(() => {
    const onChange = (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(
        changes,
        ssrFlags
      );

      if (Object.keys(flattened).length > 0) {
        setLDData({
          ...ldData,
          flags: {
            ...ldData.flags,
            ...flattened,
          },
        });
      }
    };
    ldClient.on("change", onChange);

    return () => {
      ldClient.off("change", onChange);
    };
  }, []);

  
  return (
    <Provider
      value={ldData}
    >
      {children}
    </Provider>
  );
};


export default LDBrowser;
