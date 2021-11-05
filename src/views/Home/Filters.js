import React from "react";
import styled from "@emotion/styled";
import { Col, Spinner } from "react-bootstrap";
import { BoldText } from "@styles/mixins";

const FiltersBar = styled.div(({ theme: { colors } }) => ({
  backgroundColor: colors.secondary,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 10,

  paddingLeft: 20,
  paddingTop: 10,
  paddingBottom: 20,
  "*": { marginBottom: 0 },
}));

const FiltersContainer = styled(({ className, children }) => (
  <Col className={className} xs={3}>
    <FiltersBar>{children}</FiltersBar>
  </Col>
))({
  maxWidth: 240,
  "@media (max-width: 991px) and (min-width: 767px)": { width: "33.3333333%", maxWidth: "33.3333333%" },
  "@media (max-width: 767px)": { width: "100%", paddingBottom: 20, maxWidth: "100%" },
});

const Category = styled(BoldText)({
  fontSize: 18,
  marginTop: 10,
});

const Tag = styled.a({
  marginLeft: 20,
  fontSize: 16,
  color: "black",
  ":hover": { color: "black", cursor: "pointer", fontWeight: "bold" },
});

const SpinnerDiv = styled(({ className }) => (
  <Col xs={12} className={className + " d-flex align-items-center justify-content-center"}>
    <Spinner animation="border" variant="secondary" />
  </Col>
))({ paddingRight: 20, paddingTop: 10 });

export default function Filters({ data }) {
  const filtersTree = [];
  if (data)
    for (let i = 0; i < data.length; i++) {
      const { name, tags } = data[i];
      // Poner la categoría
      filtersTree.push(<Category key={i}>{name}</Category>);

      // Luego las etiquetas de esa categoría
      for (let i = 0; i < tags.length; i++) filtersTree.push(<Tag key={tags[i].name}>{tags[i].name}</Tag>);
    }

  return <FiltersContainer>{data ? filtersTree : <SpinnerDiv />}</FiltersContainer>;
}
