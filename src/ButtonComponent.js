import tw, { styled } from 'twin.macro';

const ButtonStyledComponent = styled.button`
  ${tw`m-2 p-3 bg-green-400 rounded text-green-50`}

  &:hover {
    ${tw`bg-green-300`}
  }

  &:active {
    ${tw`bg-green-500`}
  }
`;

const ButtonComponent = ({ keybind, ...props }) => <ButtonStyledComponent {...props}>{keybind}</ButtonStyledComponent>;

export default ButtonComponent;
