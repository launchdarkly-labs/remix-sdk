import { createContext } from 'react';
import type { LDClient as LDJSClient, LDUser, LDFlagSet } from 'launchdarkly-js-client-sdk';

interface LDContext {
  flags: LDFlagSet;
  ldClient?: LDJSClient;
  user: LDUser;
}

const context = createContext<LDContext>({ flags: {}, ldClient: undefined, user: undefined });
const { Provider, Consumer } = context;

export { Provider, Consumer, LDContext };
export default context;
