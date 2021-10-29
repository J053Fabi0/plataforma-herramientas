import React from "react";
import styled from "@emotion/styled";
import { Search } from "react-bootstrap-icons";
import { Form, InputGroup, Button } from "react-bootstrap";

const SearchButton = styled(({ className }) => (
  <Button type="submit" className={className} variant="dark">
    <Search className="mb-1" />
  </Button>
))(({ theme: { colors } }) => ({
  borderTopRightRadius: "50rem",
  borderBottomRightRadius: "50rem",
  backgroundColor: colors.primary,
  ":hover": {
    backgroundColor: colors.primary,
  },
}));

const SearchInput = styled(({ className }) => (
  <Form.Control type="search" placeholder="Buscar" className={className} />
))({ borderTopLeftRadius: "50rem", borderBottomLeftRadius: "50rem" });

const SearchComponent = styled(({ className }) => (
  <InputGroup className={className}>
    <SearchInput />
    <SearchButton />
  </InputGroup>
))({
  width: "70%",
  "@media (max-width: 767px)": {
    // With medium devices (tablets, 768px and up)
    width: "100%",
  },
});

export default function SearchBar() {
  return (
    <div className="w-100 d-flex justify-content-center mb-4 mt-5">
      <SearchComponent />
    </div>
  );
}
