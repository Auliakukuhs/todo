import React from 'react';
import { shallow } from 'enzyme';
import Component from '../component';

jest.mock('@material-ui/core/Lists');

describe('Lists component', () => {
  let props = {};

  beforeEach(() => {
    props = {
      classes: {}
    };
  });

  it('render correctly', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
