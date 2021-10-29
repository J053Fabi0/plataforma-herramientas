import React from "react";
import styled from "@emotion/styled";
import { Col, Card as CardComponent } from "react-bootstrap";
import { AllCenteredDiv, ButtonColored as CardButton } from "@styles/mixins";

const Container = styled(
  AllCenteredDiv.withComponent(({ className, children }) => (
    <Col sm={12} md={6} className={className}>
      {children}
    </Col>
  ))
)(({ theme: { colors } }) => ({
  marginBottom: 20,

  "& > .card": {
    backgroundColor: colors.secondary,
    borderColor: "transparent",
    borderWidth: 0,
  },
}));

const Image = styled(({ className, src }) => <CardComponent.Img className={className} src={src} />)(
  ({ hasImage }) => ({
    objectFit: "contain",
    paddingLeft: "2%",
    width: hasImage ? "50%" : 0,
    "@media (max-width: 1400px)": { width: hasImage ? "70%" : 0 },
    "@media (max-width: 1200px)": { width: hasImage ? "100%" : 0 },
    "@media (max-width: 991px)": {
      paddingLeft: 0,
      paddingTop: hasImage ? "4%" : 0,
      height: hasImage ? 100 : 0,
    },
  })
);

const CardComponentM = styled(({ className, children }) => (
  <CardComponent className={className}>{children}</CardComponent>
))({
  height: 200,
  flexDirection: "row",
  "@media (max-width: 991px)": { flexDirection: "column", height: "auto" },
});

const lineHeight = 1.2;
const Text = styled(({ className, children }) => (
  <CardComponent.Text className={className}>{children}</CardComponent.Text>
))({
  overflow: "hidden",
  WebkitLineClamp: 4,
  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  height: lineHeight * 4 + "em",
  lineHeight: lineHeight + "em",
});

export default function Card({ imageURL, title, text, buttonText }) {
  return (
    <Container>
      <CardComponentM>
        <Image src={imageURL} hasImage={Boolean(imageURL)} />
        <CardComponent.Body>
          <CardComponent.Title>{title}</CardComponent.Title>
          <Text>{text}</Text>

          <CardButton>{buttonText}</CardButton>
        </CardComponent.Body>
      </CardComponentM>
    </Container>
  );
}
