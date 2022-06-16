import { initServerSdk, renderFlagsToString } from 'remix-sdk/server';
import { v4 } from 'uuid';
let client = undefined;

const createClient = async (): Promise<string> => {
  client = await initServerSdk(process.env.LD_SDK_KEY);
  return v4();
};

export { initServerSdk, renderFlagsToString, createClient };
