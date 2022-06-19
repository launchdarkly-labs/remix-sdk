import { createContext } from 'react';
import type { LDClient as LDJSClient, LDFlagSet } from 'launchdarkly-js-client-sdk';

interface LDContext {
  flags: LDFlagSet;
  ldClient?: LDJSClient;
}

const context = createContext<LDContext>({ flags: {}, ldClient: undefined });
const { Provider, Consumer } = context;

export { Provider, Consumer, LDContext };
export default context;
