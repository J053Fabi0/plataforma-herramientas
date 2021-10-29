import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  color: turquoise;
`;

const Button1 = styled.button({
  color: "turquoise",
});

export default function Login() {
  return (
    <Fragment>
      <Button>Hola</Button>
      <Button1>Hola</Button1>
    </Fragment>
  );
}
