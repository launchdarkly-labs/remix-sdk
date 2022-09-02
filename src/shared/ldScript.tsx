import React from 'react';

import useFlags from './useFlags';
import useLDUser from './useLDUser';

type LDScriptProps = { clientSideID: string };

const LDScript = ({ clientSideID }: LDScriptProps) => {
  const flags = JSON.stringify(useFlags(), null, 2);
  const user = JSON.stringify(useLDUser(), null, 2);
  const windowVars = `window.clientSideID='${clientSideID}';window.ssrFlags=${flags};window.ldUser=${user};`;
  return (
    <script
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __html: `${windowVars}`,
      }}
    ></script>
  );
};

export default LDScript;
