import React from "react";
import {
  SearchIcon,
  SearchInput,
  SearchBarContainer,
} from "./search_bar.styles";
import Search from "../../../assets/icons/search.svg";

export const SearchBar = ({}) => {
  return (
    <SearchBarContainer>
      <SearchInput type="text" />
      <SearchIcon src={Search} alt="" />
    </SearchBarContainer>
  );
};
