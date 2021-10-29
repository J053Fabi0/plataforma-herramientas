import React from "react";
import styled from "@emotion/styled";
import { Col } from "react-bootstrap";
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
  <Col className={className} md={3}>
    <FiltersBar>{children}</FiltersBar>
  </Col>
))({
  "@media (max-width: 991px) and (min-width: 767px)": { width: "33.3333333%" },
  "@media (max-width: 767px)": { width: "100%", paddingBottom: 20 },
});

const Category = styled(BoldText)({
  fontSize: 18,
  marginTop: 10,
});

const Tag = styled.a({
  marginLeft: 20,
  fontSize: 16,
  color: "black",
  ":hover": { color: "black" },
});

export default function Filters({ data }) {
  const filtersTree = [];
  for (let i = 0; i < data.length; i++) {
    const { category, tags } = data[i];
    filtersTree.push(<Category key={i}>{category}</Category>);

    for (let i = 0; i < tags.length; i++) {
      const { tag, href } = tags[i];
      filtersTree.push(
        <Tag key={i} href={href}>
          {tag}
        </Tag>
      );
    }
  }

  return <FiltersContainer>{filtersTree}</FiltersContainer>;
}
