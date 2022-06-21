// @ts-ignore
import { useFlags } from 'remix-sdk/client';

export default function Index() {
  const { 'dev-test-flag': devTestFlag } = useFlags();

  return <>{devTestFlag ? `Welcome to Remix with LaunchDarkly!` : `Welcome to Remix!`}</>;
}
