import React from 'react';

import useFlags from './useFlags';

type LDScriptProps = { clientSideID: string };

const LDScript = ({ clientSideID }: LDScriptProps) => {
  const flags = JSON.stringify(useFlags(), null, 2);
  const windowVars = `window.clientSideID='${clientSideID}';window.ssrFlags=${flags}`;
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
