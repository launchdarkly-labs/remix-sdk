import { LDClient, LDFlagSet, LDOptions, LDUser } from 'launchdarkly-js-client-sdk';

export interface ProviderConfig {
  /**
   * Your project and environment specific client side ID. You can find
   * this in your LaunchDarkly portal under Account settings. This is
   * the only mandatory property required to use the React SDK.
   */
  clientSideID: string;

  /**
   * A LaunchDarkly user object. If unspecified, a new user with a
   * random key will be created and used. This user's key will remain constant across browser sessions.
   *
   * @see https://docs.launchdarkly.com/sdk/features/user-config#javascript
   */
  user?: LDUser;

  /**
   * If set to true, the ldClient will not be initialized until the user prop has been defined.
   */
  deferInitialization?: boolean;

  /**
   * LaunchDarkly initialization options. These options are common between LaunchDarkly's JavaScript and React SDKs.
   *
   * @see https://docs.launchdarkly.com/sdk/features/config#javascript
   */
  options?: LDOptions;

  /**
   * If specified, `launchdarkly-react-client-sdk` will only request and listen to these flags.
   * Otherwise, all flags will be requested and listened to.
   */
  flags?: LDFlagSet;

  /**
   * Optionally, the ldClient can be initialised outside of the provider
   * and passed in, instead of being initialised by the provider.
   * Note: it should only be passed in when it has emitted the 'ready'
   * event, to ensure that the flags are properly set.
   */
  ldClient?: LDClient | Promise<LDClient | undefined>;
}
