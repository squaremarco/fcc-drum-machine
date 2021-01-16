import tw, { styled } from 'twin.macro';

import ButtonComponent from './ButtonComponent';
import GlobalStyle from './globalStyle';
import PageComponent from './PageComponent';
import ColumnComponent from './ColumnComponent';
import RowComponent from './RowComponent';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageComponent title="25 + 5 Clock!">
        <RowComponent>
          <ColumnComponent></ColumnComponent>
        </RowComponent>
      </PageComponent>
    </>
  );
}

export default App;
