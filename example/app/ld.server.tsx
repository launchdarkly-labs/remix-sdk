import { initLDServerClient, renderFlagsToString } from 'remix-sdk';
import { v4 } from 'uuid';
let client = undefined;

const createClient = async (): Promise<string> => {
  client = await initLDServerClient(process.env.LD_SDK_KEY);
  return v4();
};

export { initLDServerClient, renderFlagsToString, createClient };
