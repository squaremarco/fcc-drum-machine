import tw, { styled } from 'twin.macro';
import { useCallback, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const ButtonStyledComponent = styled.button`
  ${tw`mr-4 mb-4 w-16 h-16 bg-green-400 rounded text-green-50 uppercase`}

  ${({ isPressed }) => (isPressed ? tw`bg-green-500` : null)}

  &:hover {
    ${tw`bg-green-300`}
  }

  &:active {
    ${tw`bg-green-500`}
  }
`;

const ButtonComponent = ({ id, keybind, audio, onPlay }) => {
  const [isPressed, setIsPressed] = useState(false);

  const buttonRef = useRef();
  const audioRef = useRef();

  const playAudio = useCallback(() => {
    onPlay && onPlay();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }, [audioRef, onPlay]);

  useHotkeys(
    keybind,
    () => {
      setIsPressed(true);
      playAudio();
    },
    { keydown: true }
  );

  useHotkeys(
    keybind,
    () => {
      setIsPressed(false);
    },
    { keyup: true }
  );

  return (
    <ButtonStyledComponent ref={buttonRef} id={id} isPressed={isPressed} className="drum-pad" onClick={playAudio}>
      <audio ref={audioRef} id={keybind.toUpperCase()} className="clip" src={audio}></audio>
      {keybind}
    </ButtonStyledComponent>
  );
};

export default ButtonComponent;
