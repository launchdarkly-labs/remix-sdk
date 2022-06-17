import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
// @ts-ignore
import { LDServerProvider, initLDClient, ldClient } from 'remix-sdk/server';

initLDClient(process.env.LD_SDK_KEY);

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const flags = await ldClient.allFlagsState({ key: 'test', anonymous: true });
  let markup = renderToString(
    <LDServerProvider flags={flags}>
      <RemixServer context={remixContext} url={request.url} />
    </LDServerProvider>,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
