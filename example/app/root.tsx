import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
// @ts-ignore
import generateSsrFlags from 'remix-sdk/server';

export const meta: Partial<MetaFunction> = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  const env = {
    LD_CLIENT_SIDE_ID: process.env.LD_CLIENT_SIDE_ID,
  };
  const ssrFlags = await generateSsrFlags();
  return { env, ssrFlags };
};

export default function App() {
  const { env, ssrFlags } = useLoaderData();
  const windowEnv = `window.env=${JSON.stringify(env)};`;
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `${ssrFlags}${windowEnv}`,
          }}
        ></script>
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
