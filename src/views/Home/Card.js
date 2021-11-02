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

const CardComponentM = styled(({ className, children }) => (
  <CardComponent className={className}>{children}</CardComponent>
))({
  flexDirection: "row",
  "@media (max-width: 991px)": { flexDirection: "column", height: "auto" },
});

const lineHeight = 1.2;
const maxLinesWithImage = 4;
const imageHeightInLines = 6;
const buttonHeightInLines = 2;
const Text = styled(({ className, children }) => (
  <CardComponent.Text className={className}>{children}</CardComponent.Text>
))(({ hasImage }) => ({
  overflow: "hidden",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: maxLinesWithImage,
  height: lineHeight * maxLinesWithImage + "em",
  lineHeight: lineHeight + "em",
  "@media (max-width: 991px)": {
    WebkitLineClamp: hasImage ? maxLinesWithImage : maxLinesWithImage + imageHeightInLines,
    height: hasImage ? "auto" : lineHeight * (maxLinesWithImage + imageHeightInLines) + "em",
    maxHeight: hasImage ? "auto" : lineHeight * (maxLinesWithImage + imageHeightInLines) + "em",
  },
  "@media (max-width: 767px)": { WebkitLineClamp: maxLinesWithImage, height: "auto" },
}));

const ImageContainer = styled(
  AllCenteredDiv.withComponent(({ className, hasImage, src }) => (
    <Col md={12} lg={4} className={className + (hasImage ? "" : " d-none")}>
      <CardComponent.Img src={src} />
    </Col>
  ))
)(({ hasImage }) => ({
  padding: 0,
  alignItems: "end",
  "@media (max-width: 991px)": { height: hasImage ? lineHeight * imageHeightInLines + "em" : 0 },
  "& > img": {
    objectFit: "contain",
    height: "100%",
    "@media (max-width: 991px)": { height: "90%" },
    width: "80%",
  },
}));

const BodyContainer = styled(({ className, children }) => <Col className={className}>{children}</Col>)(
  ({ hasImage }) =>
    hasImage
      ? {
          "& > .card-body": { paddingLeft: 0 },
          "@media (max-width: 991px)": { "& > .card-body": { paddingLeft: "1rem" } },
        }
      : {}
);

const Button = styled(({ className, children }) => (
  <CardButton className={className + " d-none d-md-inline-block"}>{children}</CardButton>
))({
  height: lineHeight * buttonHeightInLines + "em",
});

export default function Card({ imageURL, title, text, buttonText }) {
  return (
    <Container>
      <CardComponentM>
        <ImageContainer hasImage={Boolean(imageURL)} src={imageURL} />
        <BodyContainer hasImage={Boolean(imageURL)}>
          <CardComponent.Body className="">
            <CardComponent.Title>{title}</CardComponent.Title>
            <Text hasImage={Boolean(imageURL)}>{text}</Text>

            <Button>{buttonText}</Button>
          </CardComponent.Body>
        </BodyContainer>
      </CardComponentM>
    </Container>
  );
}
