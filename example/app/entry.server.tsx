import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
// @ts-ignore
import { createProvider } from 'launchdarkly-remix-sdk/server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const LDServer = await createProvider(process.env.LD_SDK_KEY, { key: 'test', anonymous: true });
  let markup = renderToString(
    <LDServer>
      <RemixServer context={remixContext} url={request.url} />
    </LDServer>,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
