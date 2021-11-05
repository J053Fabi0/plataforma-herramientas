import Card from "./Card";
import axios from "axios";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import styled from "@emotion/styled";
import React, { Fragment, useState, useEffect } from "react";
import { API_URL } from "@utils/constants";
import Navbar from "@components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

const IntroText = styled.p({
  textAlign: "center",
  "@media (max-width: 768px)": {
    // With medium devices (tablets, 768px and up)
    textAlign: "justify",
  },
});

export default function Home() {
  const [filtersData, setFiltersData] = useState(false);

  useEffect(
    () => axios.get(API_URL + "/tagsAndCategories").then(({ data: { message: m } }) => setFiltersData(m)),
    []
  );

  const muchoTexto =
    "Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.";

  return (
    <Fragment>
      <Navbar></Navbar>
      <Container>
        <h1 className="mt-5 text-center">Catálogo de herramientas</h1>
        <IntroText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Leo urna molestie at elementum eu. Bibendum neque egestas congue quisque egestas
          diam in arcu cursus. Urna nec tincidunt praesent semper feugiat. Laoreet id donec ultrices tincidunt.
        </IntroText>

        <SearchBar />

        <Row>
          <Filters data={filtersData} />
          <Col>
            <Row>
              <Card
                imageURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsalmorejodigital.com%2Fwp-content%2Fuploads%2F2019%2F01%2FLogo-Genially.png&f=1&nofb=1"
                title="Card Title"
                text={muchoTexto}
                buttonText="Explorar"
              ></Card>
              <Card imageURL="" title="Card Title" text={muchoTexto} buttonText="Explorar"></Card>
              <Card
                imageURL=""
                title="Card Title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Explorar"
              ></Card>
              <Card imageURL="" title="Card Title" text={muchoTexto} buttonText="Explorar"></Card>
              <Card
                imageURL=""
                title="Card Title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Explorar"
              ></Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
