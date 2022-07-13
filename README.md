# LaunchDarkly Remix SDK

# Quickstart

1. In `entry.server.tsx`:

```tsx
// import the createProvider function
import { createProvider } from 'remix-sdk/server';

// set async handleRequest
export default async function handleRequest() {
  // create the LDServer with your sdk key and user
  const LDServer = await createProvider(process.env.LD_SDK_KEY, {
    key: 'test',
    anonymous: true,
  });

  // LDServer wraps RemixServer
  let markup = renderToString(
    <LDServer>
      <RemixServer context={remixContext} url={request.url} />
    </LDServer>,
  );
}
```

2. In `entry.client.tsx`:

```tsx
import { LDBrowser } from 'remix-sdk/client';

hydrate(
  <LDBrowser>
    <RemixBrowser />
  </LDBrowser>,
  document,
);
```

3. In `root.tsx`:

```tsx
import { LDScript } from 'remix-sdk/shared';

export default function App() {
  // render LDScript in the html head with your clientSideID
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <LDScript clientSideID={YOUR_CLIENT_SIDE_ID} />
      </head>
    </html>
  );
}
```

4. Then `useFlags` to access flags in any component:

```tsx
import { useFlags } from 'remix-sdk/client';

export default function Index() {
  const { 'dev-test-flag': devTestFlag } = useFlags();

  return <>{devTestFlag ? `Welcome to Remix with LaunchDarkly!` : `Welcome to Remix!`}</>;
}
```

# Development

To build the sdk and then run the example app follow these steps.

First, install [modd](https://github.com/cortesi/modd):

```shell
brew install modd
```

Then, add an `example/.env` file with your launchdarkly keys:

```
LD_SDK_KEY=sdk-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
LD_CLIENT_SIDE_ID=xxxxxxxxxxxxxxxxxxxxxxxx
```

Lastly, run the `modd` command to execute the `modd.conf` script:

```shell
modd
```

Open `http://localhost:3000` to see your Remix app
