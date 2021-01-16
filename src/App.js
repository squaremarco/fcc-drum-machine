import GlobalStyle from './globalStyle';
import PageComponent from './PageComponent';
import DrumMachineComponent from './DrumMachineComponent';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageComponent title="Drum machine!">
        <DrumMachineComponent />
      </PageComponent>
    </>
  );
}

export default App;
