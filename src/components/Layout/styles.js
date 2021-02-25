import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export const ButtonCustom = styled(Button)`
  color: white !important;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #e43a18;
`;
