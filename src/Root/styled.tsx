import styled from "styled-components";

export const RootWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Sidebar = styled.div`
  border-right: 1px solid black;
  height: 100vh;
  padding: 16px;
`;

export const Content = styled.div`
  padding: 32px;
`;