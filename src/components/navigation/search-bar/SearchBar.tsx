import { SearchBarContainer, SearchButton, SearchInput } from './styles/SearchBar.styles'

const SearchBar = () => {
  return (
    <SearchBarContainer>
        <SearchInput type="text" placeholder="Search e.g. nail tech, plumber, salon..."/>
        <SearchButton>Search</SearchButton>
    </SearchBarContainer>
  )
}

export default SearchBar
