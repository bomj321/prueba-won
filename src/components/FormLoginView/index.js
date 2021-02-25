import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import toastr from "toastr";

/********Services********* */
import GlobalService from "../../Services/GlobalService";

/*******Styles*** */
import {
  Section,
  GridCustom,
  GridCustomImage,
  TextFieldCustom,
  GridForm,
  TextTitle,
  TextPassword,
  TextPasswordWrong,
  DividerCustom,
  ButtonToLogin,
  ButtonCreateAccount,
} from "./styles";

/****Image**** */
import avatar from "../../assets/logo.png";

export const FormLoginView = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleChange({ target: { name, value } }) {
    if (name == "email") {
      setEmail(value);
    }

    if (name == "password") {
      setPassword(value);
    }
  }

  function onFormSubmit() {
    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
      toastr.error("El email es requerido.");
      return;
    }

    if (password === "") {
      setPasswordError(true);
      toastr.error("La contraseña es requerida.");
      return;
    }

    let json = {
      email: email,
      password: password,
      type: "User",
    };

    GlobalService.login(json)
      .then((response) => {
        toastr.success("Te has logueado con exito");
        setToken(response.data.data.token);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          toastr.error("Credenciales erroneas");
        } else {
          toastr.error("Ha ocurrido un error al intentar loguearte.");
        }
      });
  }

  return (
    <Section>
      <Container>
        <Grid container spacing={3}>
          <GridCustomImage item xs={12} md={12} lg={6}>
            <img src={avatar} alt="Logo" />
          </GridCustomImage>
          <GridCustom item xs={12} md={12} lg={6}>
            <GridForm item xs={12} md={12} lg={12}>
              <TextTitle>Iniciar sesión</TextTitle>
              <TextFieldCustom
                id="email"
                value={email}
                name="email"
                error={emailError}
                onChange={handleChange}
                label="Correo electronico"
                variant="outlined"
              />

              <TextFieldCustom
                id="password"
                value={password}
                name="password"
                type="password"
                error={passwordError}
                onChange={handleChange}
                label="Contraseña"
                variant="outlined"
              />

              <TextPassword>Olvidé la contraseña</TextPassword>

              <ButtonToLogin onClick={onFormSubmit}>Ingresar</ButtonToLogin>

              <TextPasswordWrong>Contraseña incorrecta</TextPasswordWrong>

              <DividerCustom />

              <ButtonCreateAccount>Crear cuenta</ButtonCreateAccount>
            </GridForm>
          </GridCustom>
        </Grid>
      </Container>
    </Section>
  );
};
