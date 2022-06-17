import { LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';
import camelCase from 'lodash.camelcase';

export const camelCaseKeys = (rawFlags: LDFlagSet) => {
  const flags: LDFlagSet = {};
  for (const rawFlag in rawFlags) {
    // Exclude system keys
    if (rawFlag.indexOf('$') !== 0) {
      flags[camelCase(rawFlag)] = rawFlags[rawFlag]; // tslint:disable-line:no-unsafe-any
    }
  }

  return flags;
};

/**
 * Gets the flags to pass to the provider from the changeset.
 *
 * @param changes the `LDFlagChangeset` from the ldClient onchange handler.
 * @param targetFlags if targetFlags are specified, changes to other flags are ignored and not returned in the
 * flattened `LDFlagSet`
 * @param reactOptions reactOptions.useCamelCaseFlagKeys determines whether to change the flag keys to camelCase
 * @return an `LDFlagSet` with the current flag values from the LDFlagChangeset filtered by `targetFlags`. The returned
 * object may be empty `{}` if none of the targetFlags were changed.
 */
export const getFlattenedFlagsFromChangeset = (
  changes: LDFlagChangeset,
  targetFlags: LDFlagSet | undefined,
): LDFlagSet => {
  const flattened: LDFlagSet = {};
  for (const key in changes) {
    const flagKey = camelCase(key);
    if (!targetFlags || targetFlags[flagKey] !== undefined) {
      // tslint:disable-next-line:no-unsafe-any
      flattened[flagKey] = changes[key].current;
    }
  }

  return flattened;
};

export default { camelCaseKeys, getFlattenedFlagsFromChangeset };
