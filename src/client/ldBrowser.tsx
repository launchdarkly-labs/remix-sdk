import { Component, ReactNode } from 'react';
import { initialize, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';

import { LDContext as HocState, Provider } from '../shared/context';
import { getFlattenedFlagsFromChangeset } from '../shared/utils';

type LDBrowserProps = { children: ReactNode };

class LDBrowser extends Component<LDBrowserProps, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: LDBrowserProps) {
    super(props);
    const { ssrFlags, clientSideID, ldUser } = window;

    console.log(`initializing ld client with ${clientSideID}...`);
    const ldClient = initialize(clientSideID, ldUser, { bootstrap: ssrFlags });

    ldClient.on('change', (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(changes, ssrFlags);
      if (Object.keys(flattened).length > 0) {
        this.setState(({ flags }) => ({ flags: { ...flags, ...flattened } }));
      }
    });

    this.state = {
      flags: ssrFlags,
      ldClient,
      user: ldUser,
    };
  }

  render() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDBrowser;
