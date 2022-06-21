import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
// @ts-ignore
import { LDScript } from 'remix-sdk/shared';

export const meta: Partial<MetaFunction> = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  return process.env.LD_CLIENT_SIDE_ID;
};

export default function App() {
  const clientSideID = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <LDScript clientSideID={clientSideID} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
