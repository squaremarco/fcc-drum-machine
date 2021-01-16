import tw, { styled } from 'twin.macro';

import { keybindMap } from './consts';
import AudioButtonComponent from './AudioButtonComponent';
import { useState } from 'react';

const DrumMachineDisplayStyledComponent = styled.p`
  ${tw`text-2xl text-center p-3 bg-green-400 rounded-b-none`}
`;

const DrumMachineButtonGroupStyledComponent = styled.div`
  ${tw`pt-4 pl-4 flex flex-wrap justify-center border-2 border-t-0 border-green-400`}
`;

const DrumMachineStyledComponent = styled.div`
  ${tw`flex flex-col flex-wrap rounded-md overflow-hidden bg-green-100 text-green-50 m-3`}
`;

const DrumMachineComponent = () => {
  const [displayValue, setDisplayValue] = useState(null);

  return (
    <DrumMachineStyledComponent id="drum-machine">
      <DrumMachineDisplayStyledComponent id="display">
        {displayValue?.replace(/_/, ' ')}
      </DrumMachineDisplayStyledComponent>
      <DrumMachineButtonGroupStyledComponent>
        {Object.entries(keybindMap).map(([k, v]) => (
          <AudioButtonComponent key={k} keybind={k} onPlay={() => setDisplayValue(v.id)} {...v} />
        ))}
      </DrumMachineButtonGroupStyledComponent>
    </DrumMachineStyledComponent>
  );
};

export default DrumMachineComponent;
