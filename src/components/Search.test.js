import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './Search';
import { SearchInput } from './SearchInput';

describe('Search', () => {
  describe('Enzyme', () => {
    test('should render SearchInput', () => {
      // Act
      const wrapper = shallow(<Search />);

      // Assert
      expect(wrapper.find(SearchInput)).toHaveLength(1);
    });

    test('should render SearchInput with props', () => {
      // Arrange
      const searchValue = '1qaz';
      
      // Act
      const wrapper = shallow(<Search />);
      wrapper.setState({
        search: searchValue,
      });

      // Assert
      expect(wrapper.find(SearchInput).props().value).toEqual(searchValue);
      expect(wrapper.find(SearchInput).props().children).toEqual('Search:');
    });

    test('should render Searches for ... when state is empty', () => {
      // Arrange
      const expectedText = `Searches for ...`;
      
      // Act
      const wrapper = shallow(<Search />);

      // Assert
      expect(wrapper.find('p').text()).toEqual(expectedText);
    });

    test('should render Searches for value when state is not empty', () => {
      // Arrange
      const searchingValue = '1qaz';
      const expectedText = `Searches for ${searchingValue}`;
      
      // Act
      const wrapper = shallow(<Search />);
      wrapper.setState({
        search: searchingValue,
      });

      // Assert
      expect(wrapper.find('p').text()).toEqual(expectedText);
    });
    
    test('onSearchChange should change state', () => {
      // Arrange
      const changedValue = 'Test';
      
      // Act
      const wrapper = shallow(<Search />);
      wrapper.instance().onSearchChange(changedValue);

      // Assert
      expect(wrapper.instance().state.search).toEqual(changedValue);
    });
  });

  describe('Snapshot', () => {
    test('should match snapshot', () => {
      // Act
      const tree = renderer
        .create(<Search />)
        .toJSON();

      // Assert
      expect(tree).toMatchSnapshot();
    });
  });

  describe('React Testing Library', () => {
    test('should render SearchInput', () => {
      // Act
      render(<Search />);

      // Arrange
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('should render Searches for ... when input is empty', () => {
      // Act
      render(<Search />);

      expect(screen.getByText('Searches for ...')).toBeInTheDocument();
    });

    test('should render Searches for user input', () => {
      // Arrange
      const userInput = 'Test';
      const expectedText = `Searches for ${userInput}`;
      
      // Act
      render(<Search />);
      userEvent.type(screen.getByRole('textbox'), userInput);


      // Arrange
      expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
  });
});