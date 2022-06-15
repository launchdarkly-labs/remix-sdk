import { initLDServerClient } from 'remix-sdk'
import { v4 } from 'uuid'
let client = undefined;

const createClient = async (): Promise<string> => {
    client = await initLDServerClient(process.env.LD_KEY as string);
    return v4()
}

export { createClient }


