import { LDClient, LDFlagSet, LDUser } from 'launchdarkly-js-client-sdk';

import useFlags from '../shared/useFlags';
import useLDUser from '../shared/useLDUser';

import LDBrowser from './ldBrowser';

declare global {
    interface Window {
      ldClientBrowser: LDClient;
      ssrFlags: LDFlagSet;
      ldUser: LDUser;
      clientSideID: string;
    }
}

export { LDBrowser, useFlags, useLDUser };
