import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
// @ts-ignore
import { generateLDWindowValues } from 'remix-sdk/server';

export const meta: Partial<MetaFunction> = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  return await generateLDWindowValues(process.env.LD_CLIENT_SIDE_ID);
};

export default function App() {
  const ldWindowValues = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `${ldWindowValues}`,
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
