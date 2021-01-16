import tw, { styled } from 'twin.macro';

const PageHeaderStyledComponent = styled.h1`
  ${tw`text-center mb-3`}
`;

const PageContentStyledComponent = styled.div``;

const PageStyledComponent = styled.div`
  ${tw`container flex flex-col justify-center items-center mx-auto h-screen text-gray-700`}
`;

const PageComponent = ({ children, title }) => (
  <PageStyledComponent>
    <PageHeaderStyledComponent>{title}</PageHeaderStyledComponent>
    <PageContentStyledComponent>{children}</PageContentStyledComponent>
  </PageStyledComponent>
);

export default PageComponent;
