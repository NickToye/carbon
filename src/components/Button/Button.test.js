import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('<Button />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Button />);
      const component = wrapper.shallow();
      
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  
  describe('onClick()', () => {
    test('successfully calls the onClick handler', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(
        <Button action={mockOnClick} />
      );
      const component = wrapper.shallow();
      
      component.find('button').simulate('click');
      
      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });
  
});