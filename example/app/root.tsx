import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { createClient, renderFlagsToString } from './ld.server';
export const meta: Partial<MetaFunction> = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  const env = {
    LD_CLIENT_SIDE_ID: process.env.LD_CLIENT_SIDE_ID,
  };

  const serverId = await createClient();
  const ssrFlags = await renderFlagsToString({ key: serverId });
 
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
