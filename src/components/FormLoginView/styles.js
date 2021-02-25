import styled from "styled-components";
import avatar from "../../assets/background.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { fadeIn } from "../../styles/animation";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${avatar});
  position: fixed;
  @media (max-width: 992px) {
    height: 51rem;
    padding-top: 8rem;
    position: initial;
  }
`;

export const GridCustomImage = styled(Grid)`
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  ${fadeIn({ time: "3s" })};

  @media (max-width: 992px) {
    display: none !important;
  }
`;

export const GridCustom = styled(Grid)`
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

export const GridForm = styled(Grid)`
  background-color: white;
  padding: 4rem;
`;

export const TextFieldCustom = styled(TextField)`
  width: 100%;
  margin-bottom: 2rem !important;
`;

/*********Text and hr ************/

export const TextTitle = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
`;

export const TextPassword = styled.p`
  text-align: center;
  color: #1592e6;
`;

export const TextPasswordWrong = styled.p`
  text-align: center;
  color: #df2330;
  margin-bottom: 3rem;
`;

export const DividerCustom = styled(Divider)`
  margin-bottom: 3rem !important;
  border: 1px solid #707070 !important;
`;

/**********Buttons****** */
export const ButtonToLogin = styled.button`
  width: 100%;
  background: transparent linear-gradient(91deg, #fe4518 0%, #df2330 100%) 0% 0%
    no-repeat padding-box;
  padding: 1rem;
  color: white;
  font-size: 20px;
  letter-spacing: 4px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const ButtonCreateAccount = styled.button`
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  padding: 1rem;
  color: #828282;
  font-size: 20px;
  letter-spacing: 4px;
`;
