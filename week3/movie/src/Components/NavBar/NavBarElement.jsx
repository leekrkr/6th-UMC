import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const NavText = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavPopular = styled(LinkRouter)`
  display: flex;
  max-width: 20px;
  align-items: center;
`;

export const NavNowplaying = styled(LinkRouter)`
  display: flex;
  max-width: 50px;
  align-items: center;
`;

export const NavToprated = styled(LinkRouter)`
  display: flex;
  max-width: 50px;
  align-items: center;
`;

export const NavUpcoming = styled(LinkRouter)`
  display: flex;
  max-width: 50px;
  align-items: center;
`;