import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  describe('Enzyme', () => {
    test('should render label with text', () => {
      // Arrange
      const labelText = 'Test';

      // Act
      const wrapper = shallow(<SearchInput value=''>{labelText}</SearchInput>);

      // Assert
      expect(wrapper.find(`label[htmlFor="search"]`).text()).toEqual(labelText);
    });

    test('should render search input with value', () => {
      // Arrange
      const value = 'Test'

      // Act
      const wrapper = shallow(<SearchInput value={value} />);

      // Assert
      expect(wrapper.find(`input[type="text"]`).props().value).toEqual(value);
    });

    test('should call onChange when text changed in search input', () => {
      // Arrange
      const value = ''
      const changedValue = 'Changed';
      const onChange = jest.fn();

      // Act
      const wrapper = shallow(<SearchInput value={value} onChange={onChange} />);
      wrapper.find(`input[type="text"]`).simulate('change', { target: { value: changedValue } });

      // Assert
      expect(onChange).toBeCalledWith(changedValue);
    });
  });

  describe('Snapshot', () => {    
    test('should match snapshot and have label with text', () => {
      // Arrange
      const labelText = 'Test Label';
      const value = '';
      const onChange = jest.fn();

      // Act
      const tree = renderer
        .create(<SearchInput value={value} onChange={onChange}>{labelText}</SearchInput>)
        .toJSON();

      // Assert
      expect(tree).toMatchSnapshot();
    });

    test('should match snapshot and have search input with value', () => {
      // Arrange
      const labelText = '';
      const value = 'Test Input';
      const onChange = jest.fn();

      // Act
      const tree = renderer
        .create(<SearchInput value={value} onChange={onChange}>{labelText}</SearchInput>)
        .toJSON();

      // Assert
      expect(tree).toMatchSnapshot();
    });
  });

  describe('React Testing Library', () => {
    test('should render label with text', () => {
      // Arrange
      const labelText = 'Test';

      // Act
      render(<SearchInput value=''>{labelText}</SearchInput>);

      // Assert
      expect(screen.getByLabelText(labelText)).toBeInTheDocument();
    });

    test('should render search input with value', () => {
      // Arrange
      const value = 'Test'

      // Act
      render(<SearchInput value={value} />);

      // Assert
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });

    // test('should call onChange when text changed in search input', () => {
    //   // Arrange
    //   const value = ''
    //   const changedValue = 'Changed';
    //   const onChange = jest.fn();

    //   // Act
    //   render(<SearchInput value={value} onChange={onChange} />);
    //   userEvent.type(screen.getByRole('textbox'), changedValue);

    //   // Assert
    //   expect(onChange).toBeCalledWith(changedValue);
    // });
  });
});