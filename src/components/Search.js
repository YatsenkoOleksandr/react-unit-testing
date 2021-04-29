import React from "react";
import { SearchInput } from "./SearchInput";

export class Search extends React.Component {
  state = {
    search: '',
  };

  onSearchChange = (search) => {
    this.setState({
      search: search,
    });
  };

  render() {
    const { search } = this.state;

    return(
      <div>
        <SearchInput value={search} onChange={this.onSearchChange}>
          Search:
        </SearchInput>
        <p>Searches for { search ? search : '...' }</p>
      </div>
    );
  };
};